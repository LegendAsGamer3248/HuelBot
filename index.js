import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'  // => Only used for testing, not really needed.
dotenv.config();

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('Huel is ready.')
    const guildId = '996435642273779743'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'online',
        description: 'Will tell you wether the bot is currently suffering from an outage or not.'
    })

/*    commands?.create({
        name: 'commands-only',
        description: 'Makes sure commands can only be triggered in defined channel.',
        options: [{
            name: 'channel',
            description: 'Channels you want to whitelist for bot-commands.',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL
        }
        ]
    })*/
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }

    const { commandName, options } = interaction

    if (commandName === 'online' /* check if in bot commands channel, note that this requires a database */ ) {
        interaction.reply({
            content: 'Yes, I am online!',
            ephemeral: true
        })
    }
})

client.login(process.env.TOKEN)