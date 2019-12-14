// @commande: y
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");
const cooldown = new Set();


//=======================================//


const words = [
	":page_with_curl: |  N'oublie pas de te brosser les dents avant de te coucher, mon doux petit prince.",
	":page_with_curl: |  Sauter du 2e ou 3e étage est très souvent une mauvaise idée.",
	":page_with_curl: |  Boire des produits ménagers est très hydratant, mais cela peut occasionner des dégâts à ton petit corps tout fragile.",
	":page_with_curl: |  Prendre un bain dans de l'azote peut entraîner quelques difficultés par la suite, mais est très rafraîchissant.",
	":page_with_curl: |  Faire une T pose dans un lieu public peut entraîner des émeutes très dangereuses.",
	":page_with_curl: |  Manger les sent-bon pour les toilettes est très peu recommandé pour la santé et pour l'haleine.",
	":page_with_curl: |  Si tu utilises des toilettes turc, n'oublie pas d'utiliser la douchette à caca.",
	":page_with_curl: |  Si tu vois un mot pas gentil sur ton écran, éteint tes yeux. Ils seront plus reposés comme ça.",
	":page_with_curl: |  Pour des raisons de sécurité, ne boit pas de l'eau de javel, car cela a un très mauvais goût.",
	":page_with_curl: |  Les biscuits peuvent être appréciés par les gros, mais aussi par les personnes de corpulence normale et moyenne.",
	":page_with_curl: |  Si par hasard tu voulais le crémage, mais que celui-ci tombe, tu n'as pas à avoir peur car tout va bien se passer.",
	":page_with_curl: |  Une chips pour le goûter, c'est pas très bon pour la santé et ca fait du bruit.",
	":page_with_curl: |  Si tu possèdes un dauphin, n'hésite pas à le renommer '**Qu**'.",
	":page_with_curl: |  Votre corps est en pleine croissance, il faut fumer pour se développer !",
	":page_with_curl: |  Si tu tombes d'une échelle, tu risques de te faire bobo, sauf si tu n'es pas sur l'échelle.",
	":page_with_curl: |  Si un jour, tu vois un handicapé tétraplégique dans la rue, n'hésite pas à lui serrer la main.",
	":page_with_curl: |  Ma grand-mère m'a dit d'aller laver les assiettes, donc j'ai mis grand-mère dans le lave vaiselle.",
	":page_with_curl: |  Manger du papier n'est pas saint pour une bonne santé.",
	":page_with_curl: |  Si ton portable est un IPhone et que celui-ci tombe, n'hésite pas à lui marcher dessus.",
	":page_with_curl: |  Pour bien survivre dans la nature, il faut prendre sur soi au moins 5 ou 6 paquets de chips.",
	":page_with_curl: |  Pour ouvrir une porte, n'hésite pas à utiliser tes pieds.",
	":page_with_curl: |  Si tu es une fleur, il est important de réclamer de l'eau.",
	":page_with_curl: |  Si tu te tapes le petit doigt de pied contre un meuble, fait un rituelle satanique avec celui-ci.",
	":page_with_curl: |  Si ta connexion veut des fruits, surtout tape ta box contre un frigo. La connexion ira deux fois plus vite.",
	":page_with_curl: |  Je n'aime pas Noël, mais ne t'en fais pas, je ne t'aime pas non plus, mon doux petit sucre.",
	":page_with_curl: |  Si dans ta vie, tu as un coup de moue, n'oublie pas que ce n'est pas TOI QUI D'DÉCIDES!!!",
	":page_with_curl: |  Si tu a un caillou dans ta chaussure... Bah, je sais pas, mange le..",
]


//=======================================//


module.exports.run = async (client, message, args) => {
	message.delete();


	//=======================================//


	var temps = 15000;
	const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(500);


  //=======================================//


	if (cooldown.has(message.author.id))
		{
			const s1 = new Discord.RichEmbed()
          .setColor('#ffa500')
          .setTitle(':stopwatch: |  Vous devez attendre **15** secondes avant de pouvoir réutiliser la commande.')
			message.channel.send(s1).then(msg => msg.delete(2000));
		}


	else
		{
			const s2 = new Discord.RichEmbed()
          .setColor('#ffa500')
          .setTitle(words[Math.floor(Math.random() * words.length)])
			message.channel.send(s2).then(msg => msg.delete(30000));
			cooldown.add(message.author.id);
			setTimeout(() => {
				cooldown.delete(message.author.id)
			}, temps);
		}
};


//=======================================//


var name = "y";
var def = name.toLowerCase();


module.exports.help = {
  name: def,
};
