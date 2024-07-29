let stopMsg = false;

module.exports = {
    name: 'automsg',
    description: 'Writes a msg x amt of times',
    async execute(message, args) {
        message.client.stopMsg = stopMsg;
        const messageToWrite = args.slice(0, -2).join(' ');
        const numTimesToWrite = parseInt(args[args.length - 2]);
        const delay = parseInt(args[args.length - 1]);

        if (isNaN(numTimesToWrite) || isNaN(delay)) {
            return message.channel.send('The amount and delay must be numbers.');
        }

        for (let i = 0; i < numTimesToWrite; i++) {
            if (message.client.stopMsg) break;
            await message.channel.send(messageToWrite);
            await new Promise(resolve => setTimeout(resolve, delay * 1000));
        }
    },
};