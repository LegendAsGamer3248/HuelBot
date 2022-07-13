import DiscordJS, { Intents } from 'discord.js'
// import dotenv from 'dotenv'  // => Only used for testing, not really needed.
// dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Huel is ready.')
})

client.on('messageCreate', (message) => {
    if (message.content == '/online') {
        message.react('👍')
    }
})

client.on('m')

client.login(process.env.TOKEN)