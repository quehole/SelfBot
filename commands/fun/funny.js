module.exports = {
    name: 'funny',
    description: 'Is very funny',
    execute(message, args) {
        const jokes = [
            "Why couldn't the bicycle stand up by itself? It was two-tired.",
            "I told my wife she was drawing her eyebrows too high. She looked surprised.",
            "Why don't skeletons fight each other? They don't have the guts.",
            "I'm reading a book on anti-gravity. It's impossible to put down.",
            "What's orange and sounds like a parrot? A carrot.",
            "Why don't scientists trust atoms? Because they make up everything.",
            "I used to play piano by ear, but now I use my hands.",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I used to be a baker, but I couldn't make enough dough.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "What's orange and sounds like a parrot? A carrot.",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I'm reading a book about anti-gravity. It's impossible to put down!",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
            "I told my computer I needed a break, and now it won't stop giving me pop-up ads for vacations.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
            "I used to be a baker, but I couldn't make enough dough.",
            "I'm trying to organize a hide and seek tournament, but it's hard to find good players.",
            "I used to be a banker, but I lost interest.",
            "I'm on a whiskey diet. I've lost three days already.",
            "I'm reading a book on the history of glue. I just can't seem to put it down.",
            "Why don't some couples go to the gym? Because some relationships don't work out.",
            "Why don't eggs tell jokes? Because they might crack up.",
            "Why did the tomato turn red? Because it saw the salad dressing!",
        ]

        const randomIndex = Math.floor(Math.random() * jokes.length);
        const randomJoke = jokes[randomIndex];

        message.channel.send(randomJoke);
    },
};