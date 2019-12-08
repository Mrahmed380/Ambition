/**
 * @fichier: index.js
 * @Auteur: Koldran
 * @license Palindrome
 **/

const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');

client.on('ready', function (){
    console.log("////////////////////////////////////////////////")
    console.log("////////// [!] Connexion effectué ! ////////////")
    console.log("////////////////////////////////////////////////")
})




//welcom
client.on('guildMemberAdd', member => {
    var nom = member.user;
    var avatar = member.user.avatarURL;
    member.guild.channels.get('534443162949910537').send(`**\`\`\`Une nouvelle personne à rejoins le serveur.\`\`\`**\n***Bienvenue à toi ${nom} !***\n\n●      **${avatar}**      ●`)
});











//Mots bannis.
client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes('☭')) {
            message.delete()
        }
    }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes('☭')){
            newMessage.delete()
        }
    }
})

//_________________________________//
client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes('🖕')) {
            message.delete()
        }
    }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes('🖕')){
            newMessage.delete()
        }
    }
})

//_________________________________//
client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes(':middle_finger:')) {
            message.delete()
        }
    }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes(':middle_finger:')){
            newMessage.delete()
        }
    }
})

//_________________________________//

client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes('卐')) {
            message.delete()
        }
    }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes('卐')){
            newMessage.delete()
        }
    }
})

//_________________________________//

client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes('https://discord.gg/EweFGVR','https://discord.gg/dpFb93r')) {
        
        }
        if (message.content.includes('https://discord.gg/')) {
            message.delete()
        }

    }
})
client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes('https://discord.gg/EweFGVR','https://discord.gg/dpFb93r')){

        }
        if(newMessage.content.includes('https://discord.gg/')){
            newMessage.delete()
        }
    }
})






fs.readdir('./commandes/', (error, f) => {
    if (error) { return console.error(error); }
        let commandes = f.filter(f => f.split('.').pop() === 'js');
        if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

        commandes.forEach((f) => {
            let commande = require(`./commandes/${f}`);
            console.log(`${f} commande chargée !`);
            client.commands.set(commande.help.name, commande);
        });
});

fs.readdir('./events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

client.login(process.env.TOKEN);
