import { Client, Message } from "discord.js";
import { TranslateString } from "../deepl/translate";
import { DEVENDRA_USER_ID, JOHN_USER_ID, LIN_GUILD_ID, LIN_USER_ID } from "../consts/consts";

const autoTranslate = async (client: Client, message: Message) => {
  if (!client.user || !client.application) {
    return;
  }

  await client.guilds.fetch(LIN_GUILD_ID);
  const guild = client.guilds.cache.get(LIN_GUILD_ID);
  await guild?.members.fetch(LIN_USER_ID);
  const user = guild?.members.cache.get(LIN_USER_ID);

  if (user?.id !== message.author.id) {
    return;
  }

  const translation = await TranslateString(message.content, 'JA');
  const translatedString = translation.translations[0].text;
  message.channel.send(`${user} ${translatedString}`);
  console.log(`${message.author.username} has written ${message}`);
};

export const enableMessageCreateAutoTranslationListener = (client: Client): void => {
  client.on('messageCreate', async (message: Message) => (autoTranslate(client, message)) );
  console.log(`messageCreate for translations enabled`);
}

export const disableMessageCreateAutoTranslationListener = (client: Client): void => {
  client.removeAllListeners("messageCreate");
  console.log(`messageCreate for translations disabled`);
}