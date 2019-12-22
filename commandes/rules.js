// @commande: rules
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
	await message.delete();


  //=======================================//


  const envoyé = new Discord.RichEmbed()
    	.setColor('#32cd32')
      .setTitle(':white_check_mark: |  Je vous ai envoyé un exemplaire du règlement de Palindrome, prenez-en soin ! Regardez dans vos messages privés, si ceux-ci ne sont pas bloqués bien sûr.')
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(500);


  //=======================================//


	const s1 = new Discord.RichEmbed()
      .setColor('#32cd32')
      .setTitle(':outbox_tray: |  Je vous envoie ça tout de suite :')


	const s2 = new Discord.RichEmbed()
      .setColor('#32cd32')
      .setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **.**')


	const s3 = new Discord.RichEmbed()
			.setColor('#32cd32')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **..**')


	const s4 = new Discord.RichEmbed()
			.setColor('#32cd32')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **...**')


	const s5 = new Discord.RichEmbed()
			.setColor('#32cd32')
			.setTitle(':outbox_tray: |  Je vous envoie ça tout de suite : **....**')


	//=======================================//


	message.channel.send(s1)
	.then(message => {
    message.edit(s2)
    message.edit(s3)
    message.edit(s4)
    message.edit(s5)
    message.edit(envoyé).then(msg => msg.delete(5000))
  });


  //=======================================//


  setTimeout(function() {
    message.author.send(`__**Le règlement du serveur : Lisez bordel !**__\n\n\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n> **● Ne pas spam, insulter, être immature, faire de la pub, inviter des doubles comptes... Enfin tout ce qui fait de vous des personnes aimables et bien éduqué qui feront, ou qui on fait, le bonheur de leurs parents.** :scoff:\n\n> **● Par malheur !!! Respectez au maximum la description de chaque salon, pour la compréhension de toutes et tous... Faite le bordel ! C'est moins dur que Sekiro.**\n\n> **● Ce serveur a pour but d'être sobre et simpliste, alors ne le dégueulassez pas en postant du NSFW ou toute autre crasse nuisible, on n'est pas des animaux ici !!**\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\`\`\`diff\n- Ceci n'est qu'un rappel du règlement, que normalement vous avez lu avant de rejoindre le serveur. Bande de vilains garnements !\n\`\`\`▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n${message.author} !`)
    .catch(err => {
      const erreur = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle(':x: |  Vous messages privée sont bloqué ! Veuillez les activer.')
      message.channel.send(erreur).then(r => r.delete(5000));
    });
  }, 1000);
};


//=======================================================//


var name = "rules";
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
