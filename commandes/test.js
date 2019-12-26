// @commande: test
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");


//=======================================//


module.exports.run = async (client, message, args) => {
	await message.delete();


  //=======================================//


	if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR'))
    {
      const s1 = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle(':no_entry_sign: |  Vous n\'avez pas les permissions pour utiliser cette commande !')
      return message.channel.send(s1).then(msg => msg.delete(5000));
    }


  //=======================================//

  const s1 = new Discord.RichEmbed()
       .setColor('#2f3136')
       .setTitle('Bienvenue sur le serveur staff, c\'est ici que vous pourrez faire vos demandes. Pour faire une demande valide, veuillez suivre le même schéma que l\'image si dessous. Si votre demande ne suit pas celui-ci, elle n\'aura pas de suite.')
       .setImage('https://cdn.discordapp.com/attachments/645024434947620884/659563311393931275/unknown.png')

  const test = new Discord.RichEmbed()
      .setColor('#2f3136')
      .setTitle(':white_check_mark:')
  message.channel.send(s1).then(msg => msg.delete(5000))


  //=======================================//


	.catch(err => {
		const erreur = new Discord.RichEmbed()
        .setColor('#2f3136')
        .setTitle(':x:')
		message.channel.send(erreur).then(r => r.delete(5000));
	});
};


//=======================================//


var name = "test";
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
