const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete()


	if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
		{ return message.channel.send(':no_entry_sign: |  Vous n\'avez pas les permissions !').then(msg => msg.delete(5000)); }

	if (!args[0]) 
		{ return message.channel.send(':question: |  Veuiller écrire quelque chose.').then(msg => msg.delete(5000)); }

	
    message.channel.send(message.content.slice(5, message.content.length));
};

module.exports.help = {
    name: 'say'
};
