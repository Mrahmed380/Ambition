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
	":page_with_curl: |  Boire des produits ménagers est très hydratant, mais peut occasionner des dégâts à ton petit corps tout fragile.",
	":page_with_curl: |  Un bain dans de l'azote peut entraîner quelques difficultés par la suite.",
	":page_with_curl: |  Faire une T pose en public peut entraîner des émeutes très dangereuses.",
	":page_with_curl: |  Manger les sent-bon pour les toilettes et très peu recommandé pour l'haleine.",
	":page_with_curl: |  Si tu utilises des toilettes turc, n'oublie pas d'utiliser la douchette à caca.",
	":page_with_curl: |  Si tu vois un mot pas gentil sur ton écran, éteint tes yeux, ils seront plus reposés comme ca.",
	":page_with_curl: |  Pour des raisons de sécurité, ne boit pas de la javel, car cela a un très mauvais goût.",
	":page_with_curl: |  Les biscuits peuvent être appréciés par les gros, mais aussi par les personnes de corpulence normale.",
	":page_with_curl: |  Si, par hasard, tu voulais le crémage, mais que celui-ci tombe, tu n'as pas à avoir peur, tout va bien se passer.",
	":page_with_curl: |  Une chips au goûter, c'est pas très bon pour la santé et ca fait du bruit.",
	":page_with_curl: |  Si tu possèdes un dauphin, n'hésite pas à le nommer '**Qu**'.",
	":page_with_curl: |  Votre corps est en pleine croissance, il faut fumer pour se développer !",
	":page_with_curl: |  Si tu tombes d'une échelle, tu risques de te faire bobo, sauf si tu n'es pas sur l'échelle.",
	":page_with_curl: |  Si un jour, tu vois un handicapé tétraplégique dans la rue, n'hésite pas à lui serrer la main.",
	":page_with_curl: |  Ma grand-mère m'a dit d'aller laver les assiettes, donc j'ai mis grand-mère dans le lave vaiselle.",
	":page_with_curl: |  Manger du papier n'est pas saint pour une bonne santé.",
	]

	message.channel.send(words[Math.floor(Math.random() * words.length)]).then(msg => msg.delete(10000));


};

module.exports.help = {
    name: 'y',
    description: 'Une commande inutile.',
};