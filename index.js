import DiscordJS, { Intents } from 'discord.js' // DiscordJS
import WOKCommands from 'wokcommands' // Command Handler

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import dotenv from 'dotenv'  // => Only used for testing on your OWN PC, not really needed.
// dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Huel is ready.')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['996435642273779743'],
        typeScript: true
    })
})

client.login(process.env.TOKEN)