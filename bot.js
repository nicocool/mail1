const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDUwMDQ3MDA3MDAwNzU2Mjkz.Detidw.VuhfEwEqXh4Hij5YKDqKw__Z1tA);
