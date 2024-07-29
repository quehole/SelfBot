module.exports = {
    name: '8ball',
    description: 'Answers a question with a random response.',
    execute(message, args) {
        const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes - definitely", "As I see it, yes", "Most likely", "Signs point to yes", "Yes", "My reply is no", "My sources say no", "Very doubtful"];

        // Use the current timestamp as a seed for the random number generator
        const seed = new Date().getTime();
        Math.random(seed);

        const responsenum = Math.floor(Math.random() * responses.length);
        const response = responses[responsenum];

        message.channel.send(`The question asked was \`${args.join(' ')}\` and the 8ball says \`${response}\`.`)
    },
};
