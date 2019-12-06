/*
 * @commande: infos
 * @Auteur: Koldran
 * @license Palindrome
 */


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
		.setTitle(':white_check_mark: |  **Voici les informations du serveur: **')
		.setColor("#15f153")
		.setDescription('\n\n**Nom du serveur:** \n' + serveur_size + '\n\n**Nombre de membres:** \n' + serveur_members + '\n\n**Serveur vérifié:**  \n' + serveur_verif +'\n\n**Icon:** ')
		.setImage(serveur_icon)

	message.channel.send(`:outbox_tray: |  Je vous envoie ça tout de suite : `)
	.then(message => {
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **.**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **..**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **...**`)
        	message.edit(`:outbox_tray: |  Je vous envoie ça tout de suite : **....**`)
        	message.edit(server)
        }) ;
};




module.exports.help = {
    name: 'infos'
};