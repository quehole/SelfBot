module.exports = {
    name: 'ship',
    description: 'How much does another person love you?',
    execute(message, args) {
        let user1 = message.mentions.users.first();
        let user2 = message.mentions.users.find((user) => user.id!== user1.id);

        if (!user1) return message.channel.send('Ping some first!');
        if (!user2) user2 = message.author;

        let rate = Math.floor(Math.random() * 21) + 80;

        message.channel.send(`**${user1} is ${rate}% compatible with ${user2} :3**`);
    },
};