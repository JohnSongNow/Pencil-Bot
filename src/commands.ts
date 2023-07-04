import { Command } from "./commands/command";
import { HelloCommand } from "./commands/hello-command";
import { EnableAutoTranslateCommand } from "./commands/enable-autotranslate-command";
import { DisableAutoTranslateCommand } from "./commands/disable-autotranslate-command";

export const Commands: Command[] = [HelloCommand, EnableAutoTranslateCommand, DisableAutoTranslateCommand]; 