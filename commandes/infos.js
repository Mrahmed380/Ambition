/**
 * @commande: infos
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()


	var serveur_size = message.guild.name
	var serveur_members = message.guild.members.size

	
	const server = new Discord.RichEmbed()
		.setTitle(':white_check_mark: |  Voici nos informations:')
	    .setColor("#15f153")
	    .setDescription('**Mon créateur:**  `Koldran`\n**Mon serveur:**  `Palindrome`\n**Mon nom:**  `Ambition`\n**Créer le:**  `11/08/19`')
	message.channel.send(server);
};

module.exports.help = {
    name: 'infos',
    description: 'Une commande qui donne des informations sur le bot.',
};