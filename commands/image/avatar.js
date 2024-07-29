module.exports = {
    name: 'av',
    description: 'Displays the avatar of the mentioned user.',
    execute(message, args, client) {
        if (!message.mentions || !message.mentions.users.size) {
            return message.channel.send('Please mention a user to get their avatar.').catch(console.error);
        }
        
        const mentionedUser = message.mentions.users.first();
        const userAvatarURL = mentionedUser.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
        
        message.channel.send(`${mentionedUser.username}'s avatar: [тБе](${userAvatarURL})`).catch(console.error);
    }
};
