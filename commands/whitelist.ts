import settings from '../schemas/settings';

module.exports({
    category: 'Settings',
    description: 'Limits bot-commands to only the whitelisted channel.',
    cooldown: '1m',
    permissions: ['ADMINISTRATOR'],
    options: [
        {
            name: 'channel',
            description: 'Pick a channel to whitelist.',
            required: true,
            type: 'CHANNEL'
        }
    ],

    slash: true,
    testOnly: true,

    callback: ({ interaction, args }) => {
        if (interaction) {
            const channelId = args[0].id
            const channelType = args[0].type

            if (channelType === 0 /* && ChannelId isn't already whitelisted.*/) {
                if (interaction) {
                    interaction.reply({
                        content: 'Bot commands can now only be done in ' + args[0].name,
                        ephemeral: true
                    })
                }
                setTimeout(async () => {
                    await new settings({
                        whitelist: channelId
                    }).save()
                }, 1000)
            } else if (/* ChannelId is already whitelisted */false) {
                if ( interaction ) {
                    interaction.reply({
                        content: 'You can now use bot commands everywhere!',
                        ephemeral: true
                    })
                }

                /* Delete data */

            } else if ( channelType != 0 ) {
                if ( interaction ) {
                    interaction.reply({
                        content: 'The given channel is not a text channel!',
                        ephemeral: true
                    })
                }
            }
        }
    }
})