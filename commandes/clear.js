/*
 * @commande: clear
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = async (client, message, args) => {

	message.delete()

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(900);


    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
    	{ return message.channel.send(`:no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !`).then(msg => msg.delete(5000)); }

    if (args[0] === '0')
        { return message.channel.send(`:x: |  Vous devez spécifier un nombre de messages à supprimer, autre que **0** !`).then(msg => msg.delete(5000)); }

    if (args[0] > 100)
        { return message.channel.send(`:x: |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !`).then(msg => msg.delete(5000)); }

    if (!args[0]) 
        {   
            const filter = m => m.author.id === message.author.id;
            message.channel.send(':question: |  Combien de message voulez-vous supprimer ? Vous pouvez faire `stop` pour annulé la commande.')
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {


                collected.delete(65000);
                if (collected.first().content === 'stop') 
                    {
                        message.channel.bulkDelete('2')
                        return message.channel.send(`:x: |  La commandes a était annulé !`).then(msg => msg.delete(5000));
                    }

                if (collected.first().content === '0')
                    { 
                        message.channel.bulkDelete('2')
                        return message.channel.send(`:x: |  Vous devez spécifier un nombre de messages à supprimer autre que **0** !`).then(msg => msg.delete(5000)); 
                    }


                if (collected.first().content > 100)
                    { 
                        message.channel.bulkDelete('2')
                        return message.channel.send(`:x: |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !`).then(msg => msg.delete(5000)); 
                    }

                if (collected.first().content > 0)
                    {
                        let nbr1 = collected.first().content;
                        message.channel.bulkDelete('2')
                        setTimeout(function() {
                            message.channel.bulkDelete(nbr1)
                            .then((messages) => {
                            if (collected.first().content === '1')
                                { message.channel.send(`:white_check_mark: |  **${messages.size}** message à été supprimé !`).then(msg => msg.delete(5000)); }
                            else
                                { message.channel.send(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`).then(msg => msg.delete(5000)); }
                            })
                        }, 900)    
                    }
                else
                    {
                        message.channel.bulkDelete('2')
                        return message.channel.send(`:x: |  Vous devez spécifier un nombre de messages à supprimer !`).then(msg => msg.delete(5000)); 
                    }


            }).catch(err => {
                message.channel.bulkDelete('1')
                message.channel.send(`:x: |  60 secondes se sont écoulées. Vous avez prit trop de temps pour répondre !`).then(r => r.delete(5000));
            });
        }



        message.channel.bulkDelete(args[0])
        .then((messages) => {
            if (args[0] === '1')
                { message.channel.send(`:white_check_mark: |  **${messages.size}** message à été supprimé !`).then(msg => msg.delete(5000)); }
            else
                { message.channel.send(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`).then(msg => msg.delete(5000)); }
        })
          
};





module.exports.help = {
    name: 'clear'
};
