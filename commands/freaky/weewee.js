module.exports = {
    name: 'weewee',
    description: 'How long is your ...?',
    execute(message, args) {
        let user = message.mentions.users.first() || message.author;
    
        let randomString = [...Array(Math.floor(Math.random() * 15) + 1)].map(() => '=').join('');
        message.channel.send(`${user}'s dick is \n 8${randomString}D \n long :3`);
    },
};
