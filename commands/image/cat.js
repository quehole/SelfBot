const fetch = require('node-fetch');

module.exports = {
    name: 'cat',
    description: 'Sends Random Cat Image',
    execute(message, args) {
        fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'x-api-key': 'live_4ipTQahY7E29ZCJyZ1TYj4TKsydrehqmTV4vwCTKNXcrI0C1MOydBnnGx1Ei0Z6a'
            }
        })
          .then(response => response.json())
          .then(data => {
                const catImage = data[0].url;
                message.channel.send(catImage);
            })
          .catch(err => {
                console.error(err);
                message.channel.send('An error occurred while fetching the cat image.');
            });
    },
};