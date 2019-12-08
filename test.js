/*
 * @commande: test
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = async (client, message, args) => {

	message.delete()

	if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) 
    	{
            const s1 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !')
            return message.channel.send(s1).then(msg => msg.delete(5000));
        }

    const test = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle(':white_check_mark: |  Ui.')


    message.channel.send(test).then(msg => msg.delete(5000))
	.catch(err => {
		const erreur = new Discord.RichEmbed()
        	.setColor('#ff0000')
        	.setTitle(':white_check_mark: |  Ion.')
		message.channel.send(erreur).then(r => r.delete(5000));
	})
};




module.exports.help = {
    name: "test",
};