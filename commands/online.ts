module.exports = {
    category: 'Testing',
    description: 'Does not respond if Bot is down',
    cooldown: '3s',

    salsh: true,
    testOnly: true,
    
    if (interaction) {
        interaction.reply({
            content: 'I am here!',
            ephermal: true
        })
    }
}