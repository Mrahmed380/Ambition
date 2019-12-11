/*
 * @commande: help
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");



//=======================================================//



module.exports.run = async (client, message, args) => {

	message.delete()

    //=======================================================//

    const envoyé = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle(':white_check_mark: |  Je vous ai envoyé les commandes en privé ! Si ceux-ci ne sont pas bloqués, bien sûr.')

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);

    //=======================================================//

	message.channel.send(':outbox_tray: |  Je vous envoie ça tout de suite :')
	.then(message => {
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **.**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **..**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **...**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **....**')
        	message.edit(envoyé).then(msg => msg.delete(5000))
        }) ;

    //=======================================================//

    setTimeout(function() {
        message.author.send(`\`\`\`diff\n- Voici quelque commandes utiles:\n\`\`\`\n\n\n\n> **clear :**\n - Suprimme un nombre de message demandé.\nExemple : \`=clear {nombre}\`\n\n\n> **help :**\n - Vous donne les commandes.\n\n\n> **ping :**\n - Test la connexion de l'hébergeur.\n\n\n> **say :**\n - Fait dire au bot ce que vous voulez.\n\n\n> **infos :**\n - Donne des infos sur le serveur.\n\n\n> **link :**\n - Vous donne le lien du serveur.\n\n\n> **staff :**\n - Vous donne le lien du serveur staff.\n\n\n> **rules :**\n - Vous donne le règlement du serveur.\n\n\n> **y :**\n - Alors... Oui, mais en fait non.\n\n\n\n\n${message.author} !`)
        .catch(err => {
            const erreur = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':x: |  Vous messages privée sont bloqué ! Veuillez les activer.')
            message.channel.send(erreur).then(r => r.delete(5000));
        })
    }, 1000);
   	
	
}


//=======================================================//


var name = "help";
var def = name.toLowerCase();

module.exports.help = {
    name: def,
};