/**
 * @commande: server
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()
	var serveur_size = message.guild.name
	var serveur_members = message.guild.members.size
	var serveur_icon = message.guild.iconURL
	var serveur_verif = message.guild.verified

		if (serveur_verif === true) 
			{serveur_verif = '  :white_check_mark:'}

		else 
			{serveur_verif = '  :x:'}



	const server = new Discord.RichEmbed()
		.setTitle(':white_check_mark: |  **Voici les informations demandé: **')
		.setColor("#15f153")
		.setDescription('\n\n**Serveur:** ' + serveur_size + '\n**Personnes:** ' + serveur_members + '\n**Vérification du serveur:**  ' + serveur_verif +'\n**Icon:** ')
		.setImage(serveur_icon)


	message.channel.send(server);
};

module.exports.help = {
    name: 'server',
    description: 'Une commande qui des informations sur le serveur.',
};