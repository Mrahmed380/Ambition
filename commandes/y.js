/**
 * @commande: y
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
	message.delete()


	const words = [
	":page_with_curl: |  N'oublie pas de te brosser les dents avant de te coucher, mon doux petit prince.",
	":page_with_curl: |  Sauter du 2e ou 3e étage est très souvent une mauvaise idée.",
	":page_with_curl: |  Boire des produit ménager est très hydratant, mais peut occasionner des dégâts à ton petit corps fragile.",
	":page_with_curl: |  Un bain dans de l'azote peut entraîner quelques difficultés par la suite.",
	":page_with_curl: |  Faire une T pose en public peut entraîner des émeutes très dangereuses.",
	":page_with_curl: |  Manger les sent-bon pour les toilettes et très peut recommander pour l'alêne.",
	":page_with_curl: |  Si tu utilises des toilettes turc, n'oublie pas d'utiliser la douchette à caca.",
	":page_with_curl: |  Si tu vois un mot pas gentil sur ton écran, éteint tes yeux, ils seront plus reposés comme ca.",
	":page_with_curl: |  Pour des raisons de sécurité, ne bois pas de la javel, car cela a un très mauvais goût.",
	]

	message.channel.send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(10000));


};

module.exports.help = {
    name: 'y',
    description: 'Une commande inutile.',
};