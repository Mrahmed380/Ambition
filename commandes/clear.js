// @commande: clear
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) {
        const s1 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('🚫 |  Vous n\'avez pas les permissions requises pour utiliser cette commande !')
        return message.channel.send(s1).then(msg => msg.delete(5000));
    }

    //=======================================//

    if (args[0] === '0') {
        const s2 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('❌ |  Vous devez spécifier un nombre de messages à supprimer, autre que **0** !')
        return message.channel.send(s2).then(msg => msg.delete(5000));
    }

    //=======================================//

    if (args[0] > 100) {
        const s3 = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('❌ |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !')
        return message.channel.send(s3).then(msg => msg.delete(5000));
    }

    //=======================================//

    if (!args[0]) {
        const filter = m => m.author.id === message.author.id;
        const s4 = new Discord.RichEmbed()
            .setColor('#ffa500')
            .setTitle('❓ |  Combien de message voulez-vous supprimer ? Vous pouvez envoyer `stop` pour annuler la commande.')


        //=======================================//


        message.channel.send(s4)
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 60000
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


            if (collected.first().content === '0') {
                await message.channel.bulkDelete(2);
                const s5 = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  Vous devez spécifier un nombre de messages à supprimer, autre que **0** !')
                return message.channel.send(s5).then(msg => msg.delete(5000));
            }


            //=======================================//


            if (collected.first().content > 100) {
                await message.channel.bulkDelete(2);
                const s6 = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !')
                return message.channel.send(s6).then(msg => msg.delete(5000));
            }


            //=======================================//


            if (collected.first().content > 0) {
                let nbr1 = collected.first().content;
                await message.channel.bulkDelete(2);
                message.channel.bulkDelete(nbr1);
            } else {
                await message.channel.bulkDelete(2);
                const s7 = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  Vous devez spécifier un nombre de messages à supprimer !')
                return message.channel.send(s7).then(msg => msg.delete(5000));
            }


            //=======================================//


        }).catch(async err => {
            await message.channel.bulkDelete(1);
            const s7 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle('❌ |  60 secondes se sont écoulées. Vous avez prit trop de temps pour répondre !')
            message.channel.send(s7).then(r => r.delete(5000));
        });
    }


    //=======================================//

  
    await message.channel.bulkDelete(Number(args[0]));
};


//=======================================//


let name = 'clear';
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
