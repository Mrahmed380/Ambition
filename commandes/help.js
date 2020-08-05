// @commande: help
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    const envoyé = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle('✅ |  Je vous ai envoyé les commandes ! Regardez dans vos messages privés, si ceux-ci ne sont pas bloqués bien sûr.')
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);


    //=======================================//


    const s1 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Je vous envoie ça tout de suite :')


    const s2 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Je vous envoie ça tout de suite : **.**')


    const s3 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Je vous envoie ça tout de suite : **..**')


    const s4 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Je vous envoie ça tout de suite : **...**')


    const s5 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Je vous envoie ça tout de suite : **....**')


    //=======================================//


    message.channel.send(s1)
        .then(message => {
            message.edit(s2)
            message.edit(s3)
            message.edit(s4)
            message.edit(s5)
            message.edit(envoyé).then(msg => msg.delete(5000))
        });


    //=======================================//


    setTimeout(function () {
        const e1 = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle(`**Voici toutes les commandes que je propose:**`)
            .setDescription(`
            - help:
            Vous donne accés au différentes commandes que je possède.

            - infos:
            Vous donne quelque infos consernant le serveur.

            - link:
            Vous donne le lien d'invitation du serveur.

            - ping:
            Vous donne le nombre de ms qu'a le bot.

            - rules:
            Vous donnes le règlement du serveur.

            - staff:
            Vous donne le lien d'invitation du serveur staff.

            - y:
            Vous envoi de jolie et doux mots.
            `)


        message.author.send(e1)
            .catch(err => {
                const erreur = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  Vous messages privée sont bloqué ! Veuillez les activer.')
                message.channel.send(erreur).then(r => r.delete(5000));
            })
    }, 1000);
};


//=======================================//


let name = "help";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
