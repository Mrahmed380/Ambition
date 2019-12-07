/*
 * @commande: say
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = async (client, message, args) => {

	message.delete()


	if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
		{
            const s1 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !')
            return message.channel.send(s1).then(msg => msg.delete(5000)); 
        }

	if (!args[0]) 
		{
			const filter = m => m.author.id === message.author.id;
            const s2 = new Discord.RichEmbed()
                .setColor('#ffa500')
                .setTitle(':question: |  Que voulez-vous dire ? Veuillez écrire quelque chose. Vous pouvez faire `stop` pour annulé la commande.')
            message.channel.send(s2).then(q => q.delete(30000));
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {
            	collected.delete(65000);

                if (collected.first().content === 'stop') 
                    {
                        message.channel.bulkDelete('2')
                        const stop = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  La commandes a était annulé !')
                        return message.channel.send(stop).then(msg => msg.delete(5000));
                    }
                    
            	message.channel.bulkDelete('2')
            	message.channel.send(collected.first().content)
            }).catch(err => {
                const erreur = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  **60** secondes se sont écoulées. Vous avez prit trop de temps pour répondre !')
                message.channel.send(erreur).then(r => r.delete(5000));
            });
		}

    message.channel.send(message.content.slice(5, message.content.length));
};




module.exports.help = {
    name: 'say'
};
