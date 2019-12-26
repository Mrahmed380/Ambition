// @commande: clear
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (bot, message, args) => {
    message.delete();
    console.log(`${message.member} ran the "GiveAway" command`);
    
    
    //=======================================//
    

    var item = "";
    var time;
    var winnerCount
    let messageArray = message.content.split(" ");
   
    
    //=======================================//
    

    for (var i = 3; i < messageArray.length; i++){
        item += (messageArray[i] + " ");
    }
    winnerCount = Number(messageArray[1]);
    time = Number(messageArray[2]);
    var embed = new Discord.RichEmbed();
    embed.setDescription(item);
    var embedSent = await message.channel.send(embed);
    
    
    
    //=======================================//


    setTimeout(function() {
    var peopleReacted = embedSent.reactions.get("🎉").users;
    var winners = [];
    if (peopleReacted.length >= winnerCount) {
        winners = peopleReacted;
    }
    else {
        for (var i = 0; i < winnerCount; i++){
            var index = Math.floor(Math.random() * peopleReacted.length);
            winners.push(peopleReacted[index]);
            peopleReacted.splice(index, 1);
        }
    }

    var winnerMsg = "User(s) ";
    for (var i = 0; i < winners.length; i++){
        winnerMsg += (winners[i].toString() + ", ");
    }

    var haveHas;
    if (winners.length === 1){
        haveHas = "has";
    }
    else {
        haveHas = "have";
    }
    message.channel.send(`${winnerMsg} ${haveHas} won ${item}`);
    }, time * 1000);
};


//=======================================//


var name = 'giveaway';
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
