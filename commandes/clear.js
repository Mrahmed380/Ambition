/**
 * @commande: clear
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete()
    setTimeout(function() {}, 0.5);

    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
    	{ return message.channel.send(':no_entry_sign: |  Vous n\'avez pas les permissions !').then(msg => msg.delete(5000)); }

    if (!args[0]) 
    	{ return message.channel.send(':question: |  Vous devez spécifier un nombre de messages à supprimer !').then(msg => msg.delete(5000)); }

    if (args[0] === '0')
        { return message.channel.send(':x: |  Vous devez spécifier un nombre de messages à supprimer autre que **0** !').then(msg => msg.delete(5000)); }


                                                                              
        message.channel.bulkDelete(args[0])

            .then((messages) => {

                if (args[0] === '1')
                    message.channel.send(`:white_check_mark: |  **${messages.size}** message à été supprimé !`).then(msg => msg.delete(5000));

                else
                    message.channel.send(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`).then(msg => msg.delete(5000));
                    
            });
};

module.exports.help = {
    name: 'clear',
    description: 'Une commande qui supprime un nombre de messages demandé.',
};
