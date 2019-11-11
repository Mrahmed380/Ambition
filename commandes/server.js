const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()
	var serveur_size = message.guild.name
	var serveur_members = message.guild.members.size
	const server = new Discord.RichEmbed()
		.setTitle(':white_check_mark: |  Voici les informations demandé:')
		.setDescription('**Serveur:** ' + serveur_size + '\n**Personnes:** ' + serveur_members)
	message.channel.send(server);
	.catch(console.error);
};

module.exports.help = {
    name: 'server'
};