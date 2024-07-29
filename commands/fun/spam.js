let stopSpam = false;

module.exports = {
    name: 'spam',
    description: 'Spams a message a certain number of times.',
    async execute(message, args) {
        message.client.stopSpam = stopSpam;
        const messageToWrite = args.slice(0, -1).join(' ');
        const numTimesToWrite = parseInt(args[args.length - 1]);

        if (isNaN(numTimesToWrite)) {
            return message.channel.send('The amount must be a number.');
        }

        for (let i = 0; i < numTimesToWrite; i++) {
            if (message.client.stopSpam) break;
            await message.channel.send(messageToWrite);
        }
    },
};