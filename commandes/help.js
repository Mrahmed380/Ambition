/**
 * @commande: help
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()




	message.channel.send(`:outbox_tray: |  Je vous envoie ça tout de suite : `)
	.then(message => {
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **.**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **..**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **...**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **....**`)
        	message.edit(`:white_check_mark: |  Je vous ai envoyé les commandes en privé, normalement vous pouvais les voir !`).then(msg => msg.delete(5000))
        }) ;

    setTimeout(function() {
        message.author.send("```diff\n- Voici quelque commandes utiles:\n```\n\n\n\n> **clear :**\n - Suprimme un nombre de message demandé.\nExemple : `=clear {nombre}`\n\n> **help :**\n - Vous donne les commandes.\n\n> **ping :**\n - Test la connexion de l'hébergeur.\n\n> **say :**\n - Fait dire au bot ce que vous voulez.\n\n> **infos :**\n - Donne des infos sur le serveur.\n\n> **y :**\n - Alors... Oui, mais en fait non.")
    }, 1000);
   	
	
}

    




module.exports.help = {
    name: 'help',
    description: 'Une commande qui vous donne toutes les autres commandes, normalement.',
};