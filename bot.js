const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});
          
client.on('message', message => {
    if (message.content === 'kay') {
    	message.reply('https://gyazo.com/9ef847fd0d1d84cd8507b8a1699a08bf');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
