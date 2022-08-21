const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client({intents: [
    "Guilds",
    "GuildMessages"
]});

const prefix = '-';

client.once('ready', () =>{
    console.log('Bot online');
});

client.on('messageCreate', message => {
    message.channel.send("Test Reply");
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'test'){
        
    }
});



client.login(process.env.TOKEN);
