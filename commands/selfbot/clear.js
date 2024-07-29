module.exports = {
  name: 'c',
  description: 'Clears messages',
  async execute(message, args) {
    try {
      if (args[0] && !isNaN(args[0])) {
        const deleteCount = parseInt(args[0], 10);

        // Fetch more messages to ensure we have enough to filter
        const fetched = await message.channel.messages.fetch({ limit: deleteCount + 20 });

        // Filter fetched messages to include only those sent by the user who executed the command, excluding the command message itself
        const userMessages = fetched.filter(msg => msg.author.id === message.author.id && msg.id !== message.id);

        // Convert the collection to an array and take the first n messages from the filtered list
        const messagesToDelete = Array.from(userMessages.values()).slice(0, deleteCount);

        // Delete each message
        for (const msg of messagesToDelete) {
          if (msg.deletable) {
            await msg.delete().catch(error => {});
          }
        }
      }
    } catch (error) {
      console.error('Error while deleting messages:', error);
    }
  },
};
