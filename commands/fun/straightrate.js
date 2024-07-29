module.exports = {
  name: 'straightrate',
  description: 'How straight are you?',
  execute(message, args) {
    let user = message.mentions.users.first() || message.author;
    let rate = args[1]? parseInt(args[1]) : Math.floor(Math.random() * 101);
    if (rate < 0 || rate > 100) rate = Math.floor(Math.random() * 101);
    message.channel.send(`${user.username} might be \`${rate}%\` straight`);
  },
};