// @commande: say
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);


    //=======================================//


    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        const s1 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('🚫 |  Vous n\'avez pas les permissions requises pour utiliser cette commande !')
        return message.channel.send(s1).then(msg => msg.delete(5000));
    }


    //=======================================//


    if (!args[0]) {
        const filter = m => m.author.id === message.author.id;
        const s2 = new Discord.RichEmbed()
            .setColor('#ffa500')
            .setTitle('❓ |  Que voulez-vous dire ? Veuillez écrire quelque chose. Vous pouvez envoyer `stop` pour annuler la commande.')
        message.channel.send(s2).then(q => q.delete(30000));


        //=======================================//


        message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000,
        }).then(async collected => {
            collected.delete(65000);


            //=======================================//


            if (collected.first().content.toLowerCase() === 'stop') {
                await message.channel.bulkDelete(2);
                const stop = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  La commande a été annulée !')
                return message.channel.send(stop).then(msg => msg.delete(5000));
            }


            //=======================================//


            await message.channel.bulkDelete(2);
            message.channel.send(collected.first().content);


            //=======================================//


        }).catch(err => {
            const erreur = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle('❌ |  **60** secondes se sont écoulées. Vous avez prit trop de temps pour répondre !')
            message.channel.send(erreur).then(r => r.delete(5000));
        });
    }


    //=======================================//


    await message.channel.send(message.content.slice(5, message.content.length));
};


//=======================================//


let name = "say";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
