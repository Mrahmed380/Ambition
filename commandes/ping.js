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
      .setColor('#2f3136')
      .setTitle(':outbox_tray: |  Ping : ')

	const s2 = new Discord.RichEmbed()
	    .setColor('#2f3136')
     	.setTitle(`:outbox_tray: |  Ping : **.**`)

	const s3 = new Discord.RichEmbed()
			.setColor('#2f3136')
			.setTitle(`:outbox_tray: |  Ping : **..**`)

	const s4 = new Discord.RichEmbed()
			.setColor('#2f3136')
			.setTitle(`:outbox_tray: |  Ping : **...**`)

	const s5 = new Discord.RichEmbed()
			.setColor('#2f3136')
			.setTitle(`:outbox_tray: |  Ping : **....**`)



  message.channel.send(s1)
  .then(message => {
    var ping = Date.now() - début;
    message.edit(s2)
    message.edit(s3)
    message.edit(s4)
    message.edit(s5)
		const f1 = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle(`:inbox_tray: |  Pain : **${ping}**ms`)
    message.edit(f1)
  });
};


//=======================================//


var name = "ping";
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
