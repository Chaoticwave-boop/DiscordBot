//All the imports

require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ]})
  
  //Logs The Bot Start
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });




//Main Code
function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}


  let IsVoteActive = false;
  let allGames = [];
  let votedGames = [];

  client.on('messageCreate', async (message) => {
    if (message.author.bot){
      return;
    }
    else{
      if(message.content.includes("/makevote")){
        message.reply("The vote has been made use '/games: Game1, Game2, Game3' too start the voting!")
      }

      if (message.content.includes("/games")){
      let games = (message.content.split(/[:,,]/))
      games.splice(games.indexOf('/games'), 1)
      console.log(games)
      message.reply(`these are the games  you chose: ${games.toString(" ")} to start the vote please enter: /startvote` );
      allGames = allGames + games;
      console.log(allGames)
    }

    
    if (message.content.includes("/startvote")){
      message.reply(`All the games are ${allGames.toString(" ")} please use /vote: game to vote for a game!`)
    }
    
    if(message.content.includes("/vote")){
      let vote = (message.content.split(/[:,,]/))
      vote.splice(vote.indexOf('/vote'), 1)
      vote = vote.toString()
      votedGames.push(vote);
      console.log(votedGames)
      message.reply("vote has been registerd!")
    }

    if(message.content.includes("/endvote")){
      var winner = mode(votedGames);
      console.log(winner)
      message.reply(`This is the highest one in the list: ${winner}!`)
      votedGames = []
    }

    }
    })

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN); //login bot using token