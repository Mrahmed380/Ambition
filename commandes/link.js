/*
 * @commande: link
 * @Auteur: Koldran
 * @license Palindrome
 */


const Discord = require("discord.js");



//=======================================================//



module.exports.run = async (client, message, args) => {

	message.delete()

    //=======================================================//

    const envoyé = new Discord.RichEmbed()
        .setColor('#32cd32')
        .setTitle(':white_check_mark: |  Je vous ai envoyé le lien d\'invitation de Palindrome ! Regardez dans vos messages privés, si ceux-ci ne sont pas bloqués bien sûr.')

    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);

    //=======================================================//

	message.channel.send(':outbox_tray: |  Je vous envoie ça tout de suite :')
	.then(message => {
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **.**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **..**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **...**')
        	message.edit(':outbox_tray: |  Je vous envoie ça tout de suite : **....**')
        	message.edit(envoyé).then(msg => msg.delete(5000))
        }) ;

    //=======================================================//

    setTimeout(function() {
        message.author.send(`\`\`\`Voici le lien d'invitation du serveur discord :\`\`\`\n●    **https://discord.gg/EweFGVR**   ●\n                 ●     **EweFGVR**     ●\n\n${message.author} !`)
        .catch(err => {
            const erreur = new Discord.RichEmbed()
                .setColor('#ff0000')
                .setTitle(':x: |  Vous messages privée sont bloqué ! Veuillez les activer.')
            message.channel.send(erreur).then(r => r.delete(5000));
        })
    }, 1000);
   	
	
}


//=======================================================//


var name = "link";
var def = name.toLowerCase();

module.exports.help = {
    name: def,
};