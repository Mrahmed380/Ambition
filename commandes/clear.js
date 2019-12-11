/*
 * @commande: clear
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");



//=======================================================//



module.exports.run = async (client, message, args) => {

	message.delete()

    //=======================================================//

    if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) 
    	{
            const s1 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':no_entry_sign: |  Vous n\'avez pas les permissions requises pour utiliser cette commande !')
            return message.channel.send(s1).then(msg => msg.delete(5000)); 
        }

    //=======================================================//

    if (args[0] === '0')
        {
            const s2 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':x: |  Vous devez spécifier un nombre de messages à supprimer, autre que **0** !')
            return message.channel.send(s2).then(msg => msg.delete(5000)); 
        }

    //=======================================================//

    if (args[0] > 100)
        {
            const s3 = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':x: |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !')
            return message.channel.send(s3).then(msg => msg.delete(5000)); 
        }

    //=======================================================//

    if (!args[0]) 
        {   
            const filter = m => m.author.id === message.author.id;
            const s4 = new Discord.RichEmbed()
                .setColor('#ffa500')
                .setTitle(':question: |  Combien de message voulez-vous supprimer ? Vous pouvez envoyer `stop` pour annuler la commande.')
            message.channel.send(s4)
            message.channel.awaitMessages(filter, {
                max: 1,
                time: 60000
            }).then(collected => {
                collected.delete(65000);

                //======================================//


                if (collected.first().content.toLowerCase() === 'stop') 
                    {
                        message.channel.bulkDelete('2')
                        const stop = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  La commande a été annulée !')
                        return message.channel.send(stop).then(msg => msg.delete(5000));
                    }

                //======================================//

                if (collected.first().content === '0')
                    { 
                        message.channel.bulkDelete('2')
                        const s5 = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  Vous devez spécifier un nombre de messages à supprimer, autre que **0** !')
                        return message.channel.send(s5).then(msg => msg.delete(5000)); 
                    }

                //======================================//

                if (collected.first().content > 100)
                    { 
                        message.channel.bulkDelete('2')
                        const s6 = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  Vous ne pouvez pas supprimer plus de **100** messages, car l\'API de discord ne le permet pas !')
                        return message.channel.send(s6).then(msg => msg.delete(5000)); 
                    }

                //======================================//

                if (collected.first().content > 0)
                    {
                        let nbr1 = collected.first().content;
                        message.channel.bulkDelete('2')
                        setTimeout(async function() {
                            message.channel.bulkDelete(nbr1)
                            .then((messages) => {

                            //======================================//

                            if (collected.first().content === '1')
                                {
                                    const f1 = new Discord.RichEmbed()
                                        .setColor('#32cd32')
                                        .setTitle(`:white_check_mark: |  **${messages.size}** message à été supprimé !`)
                                    message.channel.send(f1).then(msg => msg.delete(5000)); 
                                }
                            else
                                {
                                    const f2 = new Discord.RichEmbed()
                                        .setColor('#32cd32')
                                        .setTitle(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`)
                                    message.channel.send(f2).then(msg => msg.delete(5000)); 
                                }

                            //======================================//

                            })
                        }, 700)    
                    }
                else
                    {
                        message.channel.bulkDelete('2')
                        const s7 = new Discord.RichEmbed()
                            .setColor('#ff0000')
                            .setTitle(':x: |  Vous devez spécifier un nombre de messages à supprimer !')
                        return message.channel.send(s7).then(msg => msg.delete(5000)); 
                    }

                //======================================//


            }).catch(err => {
                message.channel.bulkDelete('1')
                const s7 = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .setTitle(':x: |  60 secondes se sont écoulées. Vous avez prit trop de temps pour répondre !')
                message.channel.send(s7).then(r => r.delete(5000));
            });
        }


        //=======================================================//


        const delay = ms => new Promise(res => setTimeout(res, ms));
        await delay(700);


        await message.channel.bulkDelete(args[0])
        .then((messages) => {
            if (args[0] === '1')
                {
                    const f1 = new Discord.RichEmbed()
                        .setColor('#32cd32')
                        .setTitle(`:white_check_mark: |  **${messages.size}** message à été supprimé !`)
                    message.channel.send(f1).then(msg => msg.delete(5000)); 
                }
            else
                {
                    const f2 = new Discord.RichEmbed()
                        .setColor('#32cd32')
                        .setTitle(`:white_check_mark: |  **${messages.size}** messages ont été supprimés !`)
                    message.channel.send(f2).then(msg => msg.delete(5000)); 
                };
        })

};



//=======================================================//



var name = 'clear';
var def = name.toLowerCase();

module.exports.help = {
    name: def,
};
