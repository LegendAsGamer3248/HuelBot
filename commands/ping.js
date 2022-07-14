const { Interaction } = require("discord.js");

module.exports = {
    category: 'Testing',
    description: 'Test',

    slash: true,
    testOnly: true,

    callback: ({ interaction }) => {
        if (interaction) {
            interaction.reply("I'm here!")
        }
    }
}