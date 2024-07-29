module.exports = {
    name: 'stopmsg',
    description: 'Stops the automsg cmd',
    async execute(message, args) {
        message.client.stopMsg = true;
        const stopMessage = await message.channel.send('Automessage stopped!');
        setTimeout(async () => {
            await stopMessage.delete();
        }, 2500);
    },
};