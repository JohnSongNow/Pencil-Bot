import { Client, GatewayIntentBits } from "discord.js";
import { BOT_TOKEN } from "./consts/consts";
import interactionCreate from "./listeners/interaction-create-listener";
import ready from "./listeners/ready-listener";

console.log('Bot is starting...');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

ready(client);
interactionCreate(client);
client.login(BOT_TOKEN);