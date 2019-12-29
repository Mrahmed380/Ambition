// @commande: y
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");
const cooldown = new Set();


//=======================================//


const words = [
	"📄 |  N'oublie pas de te brosser les dents avant de te coucher, mon doux petit prince.",
	"📄 |  Sauter du 2e ou 3e étage est très souvent une mauvaise idée.",
	"📄 |  Boire des produits ménagers est très hydratant, mais cela peut occasionner des dégâts à ton petit corps tout fragile.",
	"📄 |  Prendre un bain dans de l'azote peut entraîner quelques difficultés par la suite, mais est très rafraîchissant.",
	"📄 |  Faire une T pose dans un lieu public peut entraîner des émeutes très dangereuses.",
	"📄 |  Manger les sent-bon pour les toilettes est très peu recommandé pour la santé et pour l'haleine.",
	"📄 |  Si tu utilises des toilettes turc, n'oublie pas d'utiliser la douchette à caca.",
	"📄 |  Si tu vois un mot pas gentil sur ton écran, éteint tes yeux. Ils seront plus reposés comme ça.",
	"📄 |  Pour des raisons de sécurité, ne boit pas de l'eau de javel, car cela a un très mauvais goût.",
	"📄 |  Les biscuits peuvent être appréciés par les gros, mais aussi par les personnes de corpulence normale et moyenne.",
	"📄 |  Si par hasard tu voulais le crémage, mais que celui-ci tombe, tu n'as pas à avoir peur car tout va bien se passer.",
	"📄 |  Une chips pour le goûter, c'est pas très bon pour la santé et ca fait du bruit.",
	"📄 |  Si tu possèdes un dauphin, n'hésite pas à le renommer '**Qu**'.",
	"📄 |  Votre corps est en pleine croissance, il faut fumer pour se développer !",
	"📄 |  Si tu tombes d'une échelle, tu risques de te faire bobo, sauf si tu n'es pas sur l'échelle.",
	"📄 |  Si un jour, tu vois un handicapé tétraplégique dans la rue, n'hésite pas à lui serrer la main.",
	"📄 |  Ma grand-mère m'a dit d'aller laver les assiettes, donc j'ai mis grand-mère dans le lave vaiselle.",
	"📄 |  Manger du papier n'est pas saint pour une bonne santé.",
	"📄 |  Si ton portable est un IPhone et que celui-ci tombe, n'hésite pas à lui marcher dessus.",
	"📄 |  Pour bien survivre dans la nature, il faut prendre sur soi au moins 5 ou 6 paquets de chips.",
	"📄 |  Pour ouvrir une porte, n'hésite pas à utiliser tes pieds.",
	"📄 |  Si tu es une fleur, il est important de réclamer de l'eau.",
	"📄 |  Si tu te tapes le petit doigt de pied contre un meuble, fait un rituelle satanique avec celui-ci.",
	"📄 |  Si ta connexion veut des fruits, surtout tape ta box contre un frigo. La connexion ira deux fois plus vite.",
	"📄 |  Je n'aime pas Noël, mais ne t'en fais pas, je ne t'aime pas non plus, mon doux petit sucre.",
	"📄 |  Si dans ta vie, tu as un coup de moue, n'oublie pas que ce n'est pas TOI QUI D'DÉCIDES!!!",
	"📄 |  Si tu a un caillou dans ta chaussure... Bah, je sais pas, mange le..",
];


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    if (message.channel.id === "593833705970073620") return;


    //=======================================//


    let temps = 15000;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    await delay(500);


    //=======================================//


    if (cooldown.has(message.author.id)) {
        const s1 = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle('⏱️ |  Vous devez attendre **15** secondes avant de pouvoir réutiliser la commande "y".')
        message.author.send(s1)
    } else {
        const s2 = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle(words[Math.floor(Math.random() * words.length)])
        message.channel.send(s2).then(msg => msg.delete(30000));
        cooldown.add(message.author.id);
        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, temps);
    }
};


//=======================================//


let name = "y";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
