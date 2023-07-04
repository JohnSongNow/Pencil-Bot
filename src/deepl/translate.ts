import fetch from 'node-fetch';
import { DEEP_L_API_KEY } from "../consts/consts";

export type Translation = {
  deteched_source_lanauage: string,
  text: string
}

export type TranslationPayload = {
  translations: Translation[]
}

export const TranslateString = async (translateString: string, targetLanguage: string): Promise<TranslationPayload> => {
  const headers = {
    'Authorization': `DeepL-Auth-Key ${DEEP_L_API_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  const body = `text=${translateString}&target_lang_${targetLanguage}`;
  const options = {
    method: 'POST',
    headers,
    body: new URLSearchParams({
      'text': translateString,
      'target_lang': targetLanguage
    })
  };

  return await fetch('https://api-free.deepl.com/v2/translate', options)
    .then((response) => {
      return response.json() as Promise<TranslationPayload>
    })
}

/*
// see above thread for running await in root level
// https://stackoverflow.com/questions/63718054/how-to-use-top-level-async-await-with-typescript
async function main(): Promise<void> {
  const foo = await TranslateString('hi', 'ZH');
  console.log(foo.translations)
}
main()
*/
