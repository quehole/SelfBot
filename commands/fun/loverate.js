module.exports = {
    name: 'loverate',
    description: 'How compatible are you?',
    execute(message, args) {
        let user1 = message.mentions.users.first();
        let user2 = message.mentions.users.find((user) => user.id!== user1.id);

        if (!user1) return message.channel.send('What?');
        if (!user2) user2 = message.author;

        let rate = 0;
        if (args[0] &&!isNaN(args[0]) && args[0] >= 1 && args[0] <= 100) {
            rate = parseInt(args[0]);
        } else {
            rate = Math.floor(Math.random() * 59) + 43;
        }

        message.channel.send(`**${user1} loves ${user2} ${rate}% :3**`);
    },
};