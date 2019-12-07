/*
 * @commande: ping
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = (client, message, args) => {

	message.delete()

    let début = Date.now();

    message.channel.send(':outbox_tray: |  Ping : ')
        .then(message => {
            var ping = Date.now() - début;
            const s1 = new Discord.RichEmbed()
                .setColor('#32cd32')
                .setTitle(`:inbox_tray: |  Pain : **${ping}**ms`)
        	message.edit(`:outbox_tray: |  Ping : **.**`)
        	message.edit(`:outbox_tray: |  Ping : **..**`)
        	message.edit(`:outbox_tray: |  Ping : **...**`)
        	message.edit(`:outbox_tray: |  Ping : **....**`)
        	message.edit(s1)
        }) ;
         
};




module.exports.help = {
    name: 'ping'
};
