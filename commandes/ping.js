/*
 * @commande: ping
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");




module.exports.run = (client, message, args) => {

	message.delete()

    let début = Date.now() ;

    message.channel.send(':outbox_tray: |  Ping : ')
        .then(message => {
        	message.edit(`:outbox_tray: |  Ping : **.**`)
        	message.edit(`:outbox_tray: |  Ping : **..**`)
        	message.edit(`:outbox_tray: |  Ping : **...**`)
        	message.edit(`:outbox_tray: |  Ping : **....**`)
        	message.edit(`:inbox_tray: |  Pain : **${Date.now() - début}**ms`)
        }) ;
         
};




module.exports.help = {
    name: 'ping'
};
