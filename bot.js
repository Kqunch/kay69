const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
          
client.on('message', message => {
    if (message.content === 'oldwaifu') {
    	message.reply('https://gyazo.com/5ca4235d3eb29327daf33655473c0325');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
