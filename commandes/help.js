/**
 * @commande: help
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()

	message.author.send("```diff\n-Voici toutes mais magnifiques commandes:\n```\n\n\n**clear:**  supprime un nombre spécifique de messages.\n**infos:**  donne basiquement des informations sur le bot.\n**help:**  donne les commandes.\n**kick:**  sert à kick une personne, magique.\n**ping:**  ping un serveur aléatoire et montre les ms du bot.\n**say:**  fait dire au bot ce que bon vous semble.\n**y:**  dit de bon mots.\n\n\n\nJ'ai pas terminé mais, hop, ca part comme ca et puis nik.");
	message.channel.send(`:white_check_mark: |  Je vous ai envoyé les commandes en privé !`).then(msg => msg.delete(5000))
}

    




module.exports.help = {
    name: 'help',
    description: 'Une commande qui vous donne toutes les autres commandes, normalement.',
};