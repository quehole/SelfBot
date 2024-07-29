module.exports = {
    name: 'rps',
    description: 'Rock, Paper, Scissors',
    execute(message, args) {
        const options = ['rock', 'paper', 'scissors', 'r', 'p', 's'];
        if (!options.includes(args[0])) {
            message.channel.send('Invalid option! Please choose rock, paper, or scissors.');
            return;
        }
        
        const rng = Math.floor(Math.random() * options.length);
        const result = options[rng]; 
        let finalMessage = '';

        if (result === args[0]) {
            finalMessage = "It's a tie!";
        } else if ((result === 'scissors' || 's' && args[0] === 'rock') ||
                   (result === 'rock' || 'r' && args[0] === 'paper') ||
                   (result === 'paper' || 'p' && args[0] === 'scissors')) {
            finalMessage = 'You win!';
        } else {
            finalMessage = 'You lose!';
        }

        message.channel.send(`You chose ${args[0]}, I chose ${result}. ${finalMessage}`);
        return;
    },
};