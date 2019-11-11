const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete()
    setTimeout(function() {}, 0.5);

    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
    	{ return message.channel.send(':no_entry_sign: |  Vous n\'avez pas les permissions !').then(msg => msg.delete(5000)); }

    if (!args[0]) 
    	{ return message.channel.send(':question: |  Vous devez spécifier un nombre de messages à supprimer !').then(msg => msg.delete(5000)); }


                                                                              
        message.channel.bulkDelete(args[0])
            .then((messages) => {
                message.channel.send(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`).then(msg => msg.delete(5000));
            });
};

module.exports.help = {
    name: 'clear'
};
