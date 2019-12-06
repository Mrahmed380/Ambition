/*
 * @commande: test
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = async (client, message, args) => {

	message.delete()

	if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) 
    	{ return message.channel.send(':no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !').then(msg => msg.delete(5000)); }

    message.channel.send('UI').then(msg => msg.delete(5000));

};




module.exports.help = {
    name: "test",
};