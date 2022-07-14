import DiscordJS, { Intents } from 'discord.js' // DiscordJS
import WOKCommands from 'wokcommands' // Command Handler
import path from 'path' // Gets path for Command Handler
import { fileURLToPath } from 'url' // Required to fix __dirname not defined Error.
import dotenv from 'dotenv'  // => Only used for testing on your OWN PC, not really needed.
dotenv.config();

// const __filename = fileURLToPath(import.meta.url); // Used for __dirname
// const __dirname = path.dirname(__filename); // Used to fix __dirname not defined Error.

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Huel is ready.')

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['996435642273779743']
    })
})

client.login(process.env.TOKEN)