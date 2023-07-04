import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { LIN_GUILD_ID } from "../consts/consts";
import { disableMessageCreateAutoTranslationListener } from "../listeners/message-create-listener";
import { Command } from "./command";

export const DisableAutoTranslateCommand: Command = {
    name: "disable-auto-translate",
    description: "Disables the following shang lin ye and translates his words into Chinese",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        if (interaction.guildId !== LIN_GUILD_ID) {
            return;
        }

        disableMessageCreateAutoTranslationListener(client);
        const content = "Disable Translate Enabled!";

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}