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

client.login(process.env.NjEzODIwNjA4NzE5MDkzNzc4.XV8KHA.eQKpU28siEkiVF7viyTg5Ecimiw);//where BOT_TOKEN is the token of our bot
