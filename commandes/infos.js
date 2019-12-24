// @commande: infos
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
	await message.delete();


	//=======================================//


	var serveur_size = message.guild.name
	var serveur_members = message.guild.members.size
	var serveur_icon = message.guild.iconURL
	var serveur_verif = message.guild.verified


	if (serveur_verif === true)
		{serveur_verif = '  :white_check_mark:'}


	else
		{serveur_verif = '  :x:'}


	//=======================================//


	const server = new Discord.RichEmbed()
		.setTitle(':white_check_mark: |  **Voici les informations du serveur. **')
		.setAuthor(serveur_size, serveur_icon)
		.setColor("#2f3136")
		.setDescription('
		
		**Nombre de membres:**
		' + serveur_members + '
	
		**Serveur vérifié:**
		' + serveur_verif +'


	//=======================================//


	const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(500);


  //=======================================//


	const s1 = new Discord.RichEmbed()
      .setColor('#202225')
      .setTitle(':outbox_tray: |  Je vous envoie ça tout de suite :')


	const s2 = new Discord.RichEmbed()
      .setColor('#202225')
      .setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **.**')


	const s3 = new Discord.RichEmbed()
			.setColor('#202225')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **..**')


	const s4 = new Discord.RichEmbed()
			.setColor('#202225')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **...**')


	const s5 = new Discord.RichEmbed()
			.setColor('#202225')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **....**')


	//=======================================//


	message.channel.send(s1)
	.then(message => {
    message.edit(s2)
    message.edit(s3)
    message.edit(s4)
    message.edit(s5)
    message.edit(server)
  });
};


//=======================================//


var name = "infos";
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
