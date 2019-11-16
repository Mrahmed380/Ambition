/**
 * @commande: help
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()

	message.channel.send(':white_check_mark: |  Je vous envoi ca tout de suite **[    ]**')
        .then(message => {
        	message.edit(`:white_check_mark: |  Je vous envoi ca tout de suite **[.   ]**`)
        	message.edit(`:white_check_mark: |  Je vous envoi ca tout de suite **[..  ]**`)
        	message.edit(`:white_check_mark: |  Je vous envoi ca tout de suite **[... ]**`)
        	message.edit(`:white_check_mark: |  Je vous envoi ca tout de suite **[....]**`).then(msg => msg.delete(3000))
        });

    setTimeout(function() {
    	message.channel.send(`:white_check_mark: |  Je vous ai envoyé les commandes en privé !`).then(msg => msg.delete(5000))
    	message.author.send("**clear:** nétoie.\n**help:** aide.\n**ping:** test la connexion de l'hébergeur.\n**say:** fait dire au bot ce que vous voulez.\n**server:** donne des infos sur le serveur.\n**y:** surment.")
    }, 2300);

   	
	
}

    




module.exports.help = {
    name: 'help',
    description: 'Une commande qui vous donne toutes les autres commandes, normalement.',
};