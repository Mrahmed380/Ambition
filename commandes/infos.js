// @commande: infos
// @Auteur: Koldran
// @license Palindrome


const Discord = require("discord.js");
const cooldown = new Set();


//=======================================//


module.exports.run = async (client, message, args) => {
    await message.delete();


    //=======================================//


    if (message.channel.id === "593833705970073620") return;


    //=======================================//


    let serveur_size = message.guild.name
    let serveur_members = message.guild.members.size
    let serveur_icon = message.guild.iconURL
    let serveur_roles = message.guild.roles.size


    //=======================================//


    const server = new Discord.RichEmbed()
        .setTitle(':white_check_mark: |  **Voici les informations du serveur **')
        .setThumbnail(serveur_icon)
        .setColor("#2f3136")
        .setDescription('\n\n**Nom du serveur:**\n' + serveur_size + '\n\n**Nombre de membres:**\n' + serveur_members + '\n\n**Nombre de rôles:**\n' + serveur_roles + '\n\n**Créateur:**\nKoldran#7765, avec le soutien de Repen#3997 et l\'aide du serveur Amandine.\n\n**Ambition est un bot qui a pour principale fonction d\'assister Palindrome.**\n')


    //=======================================//


    let temps = 10000;
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


    if (cooldown.has(message.author.id)) {
        const s1 = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle(':stopwatch: |  Vous devez attendre **5** secondes avant de pouvoir réutiliser la commande "infos".')
        message.author.send(s1)
    } else {
        cooldown.add(message.author.id);
        message.channel.send(s1)
            .then(message => {
                message.edit(s2)
                message.edit(s3)
                message.edit(s4)
                message.edit(s5)
                message.edit(server)
            });
        setTimeout(() => {
            cooldown.delete(message.author.id);
        }, temps);
    }
};


//=======================================//


let name = "infos";
let def = name.toLowerCase();


module.exports.help = {
    name: def,
};
