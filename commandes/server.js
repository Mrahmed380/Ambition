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


	const server = new Discord.RichEmbed()
		.setTitle(':white_check_mark: |  Voici les informations demandé:')
		.setDescription('**Serveur:** ' + serveur_size + '\n**Personnes:** ' + serveur_members)

		
	message.channel.send(server);
};

module.exports.help = {
    name: 'server',
    description: 'Une commande qui des informations sur le serveur.',
};