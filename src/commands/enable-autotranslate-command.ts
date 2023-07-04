import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { LIN_GUILD_ID } from "../consts/consts";
import { enableMessageCreateAutoTranslationListener } from "../listeners/message-create-listener";
import { Command } from "./command";

export const EnableAutoTranslateCommand: Command = {
    name: "enable-auto-translate",
    description: "Automatically follow shang lin ye and translates his words into Chinese",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        if (interaction.guildId !== LIN_GUILD_ID) {
            return;
        }

        enableMessageCreateAutoTranslationListener(client);
        const content = "Auto Translate Enabled!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}