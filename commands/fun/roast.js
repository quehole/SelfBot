module.exports = {
    name: 'roast',
    description: 'Random Roast',
    execute(message, args) {
        const roasts = [
            "BLUD is talking tough on disc of the cord😭💯💯💀if you ever see me in the STREETS🦖🐲 YOU better gorilla glue those CHEEKS or else ima go WILDYou think you safe in the comment section⁉️🙅You betta hope you dont🐍catch me in these streets cause my desire for cheeks🍑 dont play no games😈I will swing ma balls on you like a grandfather clock🕰️😭🙏 betta not catch you in these comments again or its finna gon be OVER for youI will sever those glutes young lad😭🙏🏽🙏🏽 I better not discover you committing notorious deeds or it gonna be over🗣️🗣️😭I will proceed to spread the gluteus maximas 😭🙏🙏 My consciousness best not capture your presence in one of my feedback sectionsI will spread ur cheeks lil bro 😭😭🙏🙏 I betta not catch you in my comments again or it's finna gon be OVER for you 👾 😭😭🤦🏽‍♂️🤦🏽‍♂️ betta pray you aint catchin me on these streets dawg 🙏🙏💯💯💯 you finna regret it talkin crazyy stuff like dat look man ill slap da goofy out ur ass cheeks 💯 dont dilly dally between my insolence😈😈",
            "if you dare say a single syllable you shall beyou’re a chipper young lad😭🌽 you wouldnt dare holler such whimsical nonsense to my face💀💯 dont ever try such buffoonery with me ever again😂🫵I will create a gap amongst thou’s turbulence creators if I catch this dubious dialogue being spread again 😭🙏‼️I will tickle ur pickle for a nickel bro🤑🦟🙏🏽 I better not catch u in my comments again or it will be the end of your era🧑‍🎤👩‍🎤🗣️🤑 Don’t ever disrespect me cuh on my dead homies 🙏🏼🕊️I will swing my balls across your face like a grandfather clock 🕰️😭 dawg you think your safe commenting this‼️⁉️🙅‍♂️Better keep your Butt Cheeks 🍑 closed❌ cus I'm coming for you‼️ Betta hope u not talkin to my homie like dat young slime🙅‍♂️🙅‍♂️💀 Ill play with your asshole hairs like a banjo if you keep talkin crazy😭🤦🏽‍♂️🪕🪕",
            "Not funny I didn't laugh. Your joke is so bad I would have preferred the joke went over my head and you gave up re-telling me the joke. To be honest this is a horrid attempt at trying to get a laugh out of me. Not a chuckle, not a hehe, not even a subtle burst of air out of my esophagus. Science says before you laugh your brain preps your face muscles but I didn't even feel the slightest twitch. 0/10 this joke is so bad I cannot believe anyone legally allowed you to be creative at all. The amount of brain power you must have put into that joke has the potential to power every house on Earth. Get a personality and learn how to make jokes, read a book. I'm not saying this to be funny I genuinely mean it on how this is just bottom barrel embarrassment at comedy. You've single handedly killed humor and every comedic act on the planet. I'm so disappointed that society has failed as a whole in being able to teach you how to be funny. Honestly if I put in all my power and time to try and make your joke funny it would require Einstein himself to build a device to strap me into so I can be connected to the energy of a billion stars to do it, and even then all that joke would get from people is a subtle scuff. You're lucky I still have the slightest of empathy for you after telling that joke otherwise I would have committed every war crime in the book just to prevent you from attempting any humor ever again. We should put that joke in text books so future generations can be wary of becoming such an absolute comedic failure. Im disappointed, hurt, and outright offended that my precious time has been wasted in my brain understanding that joke. In the time that took I was planning on helping kids who have been orphaned, but because of that you've waisted my time explaining the obscene integrity of your terrible attempt at comedy. Now those kids are suffering without meals and there's nobody to blame but you.",
            "fucking autistic round head ass looking like a stickman, your profession is being a fucking donkey you fucking hipster, you look like a crackhead, when you turn to your side you dissapear like a magician you fucking scrawny little toe sucking cow shit mauling hunchback looking retard, i hope you get attacked by 67 rapid pitbulls while you walk home from school next week you fucking bitch ass camel, your sense of humor is worser than Drew Ackerman's, boring ass emo kid, your hairy is more greasy and tangly than a fucking street cat you rabbit ass cowboy looking motherfucker now im bout to get the packing on yo stuff boi u look like a zestful squirrel monkey black ah boi u look like you chew on diceratop ankles bitch ah boi yo momma built like an overweight camel fat ah momma i bet she chew on obnoxious tampons with her fat ah and i caught yo grandpa chewing on corkscrews dumb ah boi tell me why i caught yo ass chewing on coordinated tin can with yo fat ah boi u look like a rambunctious sea slime with yo stupid ah",
            "dont care + didnt ask + cry about it + stay mad + get real + L + mald seethe cope harder + hose mad + basic + skill issue + ratio + you fell off + the audacity + triggered + any askers + redpilled + get a life + ok and? + cringe + touch grass + donowalled + not based + not funny didnt laugh + go outside + get good + reported + ad hominem + ask deez + ez clap + straight cash + ratio again + final ratio + stay mad + stay pressed + you like children + cancelled + done for + mad + free + freer than air + rip bozo + slight_smile + cringe again + mad cuz bad + lol + irrelevant + cope + jealous + go ahead whine about it + your problem + dont even care + not okay + glhf + problematic + no father figure + radioactive + rat + Idc+ ratio+ carti better+ carti solos+ carti > your existence +don't care + didn't ask + cry about it + stay mad + get real + L + mald seethe cope harder + hoes mad + basic + ratio + you fell off + the audacity + triggered + any askers + redpilled + get a life + ok and? + cringe + touch grass + not based + your're a (insert stereotype) + not funny didn't laugh + you're* + grammar issue + go outside + get good + reported! + ask deez + ratio again + final ratio + stay mad + stay pressed + cancelled + done for + mad free + freer than air + rip bozo + cringe + lol + irrelevant + cope + jealous + go ahead whine about it + your problem + don't care even more + eat glass 📷",
        ]

        const randomIndex = Math.floor(Math.random() * roasts.length);
        const randomRoast = roasts[randomIndex];

        message.channel.send(randomRoast);
    },
};