// @commande: test
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
        const s1 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('🚫 |  Vous n\'avez pas les permissions pour utiliser cette commande !')
        return message.channel.send(s1).then(msg => msg.delete(5000));
    }


    //=======================================//


    const test = new Discord.RichEmbed()
        .setColor('#2f3136')
        .setTitle('✅')
    message.channel.send(test).then(msg => msg.delete(5000))


        //=======================================//


        .catch(err => {
            const erreur = new Discord.RichEmbed()
                .setColor('#2f3136')
                .setTitle('❌')
            message.channel.send(erreur).then(r => r.delete(5000));
        });
};


//=======================================//


let name = "test";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
