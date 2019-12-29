// @commande: staff
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    const envoyé = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle('✅ |  Je vous ai envoyé le lien d\'invitation du serveur staff ! Regardez dans vos messages privés, si ceux-ci ne sont pas bloqués bien sûr.')
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
            message.edit(envoyé).then(msg => msg.delete(5000));
        });


    //=======================================//


    setTimeout(function () {
        message.author.send(`\`\`\`Voici le lien d'invitation du serveur staff :\`\`\`\n●    **https://discord.gg/dpFb93r**   ●\n                 ●     **dpFb93r**     ●\n\n${message.author} !`)
            .catch(err => {
                const erreur = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle('❌ |  Vous messages privée sont bloqué ! Veuillez les activer.')
                message.channel.send(erreur).then(r => r.delete(5000));
            });
    }, 1000);
};


//=======================================//


let name = "staff";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
