module.exports = {
    category: 'Testing',
    description: 'Does not respond if Bot is down',
    
    salsh: true,
    testOnly: true,
    
    callback: ({}) => {
        return 'I am here!'
    }
}