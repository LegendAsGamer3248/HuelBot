module.exports = {
    category: 'Utility',
    description: 'Does not respond if Bot is down',
    cooldown: '3s',

    slash: true,
    testOnly: true,
    
    callback: ({ interaction }) => {
        if (interaction) {
            interaction.reply({
                content: 'I am here!',
                ephemeral: true
            })
        }
    }
}