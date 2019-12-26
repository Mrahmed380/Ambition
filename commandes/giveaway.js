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
    
    
    //=======================================//


    var giveEmbed = new Discord.RichEmbed();
    giveEmbed.setDescription(item);
    var embedSent = await message.channel.send(giveEmbed);
    embedSent.react("🎉");
    setTimeout(function() {
        
        
        //=======================================//


        var peopleReacted = embedSent.reactions.get("🎉").users;
        var index = Math.floor(Math.random() * peopleReacted.length);
        var winners = [];
        var winnerMsg = "";
        for (var i = 0; i < winners.length; i++){
            winnerMsg += (winners[i].toString() + " ");
        }
        var haveHas = "has";
        if (winners.length == 1){
            haveHas = "has";
        }
        else{
            haveHas = "have";
        }
        message.channel.send(winnerMsg + " " + haveHas + ` won ${item}`);
        
        
        //=======================================//
        
        
    }, time * 1000);
};


//=======================================//


var name = 'giveaway';
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
