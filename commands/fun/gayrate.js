module.exports = {
    name: 'gayrate',
    description: 'How Gay Are You?',
    execute(message, args) {
        let user = message.mentions.users.first() || message.author;
        let rate = Math.floor(Math.random() * 101);
        message.channel.send(`**${user} is ${rate}% gay**`);
    },
};