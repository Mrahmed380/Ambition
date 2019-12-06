/*
 * @commande: say
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = async (client, message, args) => {

	message.delete()


	if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
		{ return message.channel.send(':no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !').then(msg => msg.delete(5000)); }

	if (!args[0]) 
		{
			const filter = m => m.author.id === message.author.id;
            message.channel.send(':question: |  Que voulez-vous dire ? Veuillez écrire quelque chose. Vous pouvez faire `stop` pour annulé la commande.').then(q => q.delete(30000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {
            	collected.delete(65000);
            	message.channel.bulkDelete('2')
            	message.channel.send(collected.first().content)
            }).catch(err => {
                message.channel.send(`:x: |  60 secondes se sont écoulées. Vous avez prit trop de temps pour répondre !`).then(r => r.delete(5000));
            });
		}

    message.channel.send(message.content.slice(5, message.content.length));
};




module.exports.help = {
    name: 'say'
};
