require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    


  ]})


  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('messageCreate', async (message) => {
    console.log(message.content)
    if (message.content == "ping"){
      message.reply("FUCKING PONG!")
    }
 
  });

  
//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token