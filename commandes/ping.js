/*
 * @commande: ping
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");
var name = "ping";
var res = name.toLowerCase();




module.exports.run = async (client, message, args) => {

	message.delete()

    let début = Date.now();

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(700);

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
    name: name,
};
