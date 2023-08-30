require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    


  ]})

  let gamelist = [];

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('messageCreate', async (message) => {
    // console.log(message)
    if (message.content == "ping"){
      message.reply("pong")
    }
    else if (message.content == "Hi"){
      message.reply(`Hello ${message.author.globalName}!`)
    }
    if (message.content.includes("/ping")){
      message.reply("/pong")
    }
    if (message.content.includes("/games")){
      let games = (message.content.split(/[:,,]/))
      games.splice(games.indexOf('/games'), 1)
      console.log(games)
      message.reply(`these are the games  you chose: ${games.toString(" ")}` )
    }
    })

    


  
//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token