// @commande: ping
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete()


    //=======================================//


    let début = Date.now();
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);


    //=======================================//


    const s1 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle('📤 |  Ping : ')

    const s2 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle(`📤 |  Ping : **.**`)

    const s3 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle(`📤 |  Ping : **..**`)

    const s4 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle(`📤 |  Ping : **...**`)

    const s5 = new Discord.RichEmbed()
        .setColor('#202225')
        .setTitle(`📤 |  Ping : **....**`)



    message.channel.send(s1)
        .then(message => {
            let ping = Date.now() - début;
            message.edit(s2)
            message.edit(s3)
            message.edit(s4)
            message.edit(s5)
            const f1 = new Discord.RichEmbed()
                .setColor('#32cd32')
                .setTitle(`📥 |  Pain : **${ping}**ms`)
            message.edit(f1)
        });
};


//=======================================//


let name = "ping";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
