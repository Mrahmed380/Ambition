// @fichier: index.js
// @Auteur: Koldran
// @license Palindrome
// @Ambition 2019


//=======================================//


const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();


//=======================================//


client.on('ready', function () {
    console.log("////////////////////////////////////////////////")
    console.log("////////// [!] Connexion effectué ! ////////////")
    console.log("////////////////////////////////////////////////")
});


//=======================================//


/*Log membre bannis*/
client.on('guildBanAdd', function (guild, user) {
    if (message.author.bot) return;
    var logger = guild.channels.get(process.env.LOGS);
    if (user.id != client.user.id) {
        if (logger != null) {
            const embed = new Discord.RichEmbed()
                .setTitle('**Membre bannis:**')
                .setColor('0x00AAFF')
                .setDescription(user + ' **a été bannis.**')
                .setFooter(user.username, user.avatarURL)
                .setTimestamp()
            logger.send({ embed });
        }
    }
});


/*Log membre débannis*/
client.on('guildBanRemove', function (guild, user) {
    if (message.author.bot) return;
    var logger = guild.channels.get(process.env.LOGS);
    if (user.id != client.user.id) {
        if (logger != null) {
            const embed = new Discord.RichEmbed()
                .setTitle('**Bannisement révoqué:**')
                .setColor('0x00AAFF')
                .setDescription('**Le bannissement de **' + user + ' **a été révoqué.**')
                .setFooter(user.username, user.avatarURL)
                .setTimestamp()
            logger.send({ embed });
        }
    }
});


/*Log membre rejoins*/
client.on('guildMemberAdd', function (guild, user) {
    if (message.author.bot) return;
    var logger = guild.channels.get(process.env.LOGS);
    if (user.id != client.user.id) {
        if (logger != null) {
            const embed = new Discord.RichEmbed()
                .setTitle('**Un membre a rejoin:**')
                .setColor('0x00AAFF')
                .setDescription(user + ' **a rejoin le serveur.**')
                .setFooter(user.username, user.avatarURL)
                .setTimestamp()
            logger.send({ embed });
        }
    }
});


/*Log membre quitté*/
client.on('guildMemberRemove', function (guild, user) {
    if (message.author.bot) return;
    var logger = guild.channels.get(process.env.LOGS);
    if (user.id != client.user.id) {
        if (logger != null) {
            const embed = new Discord.RichEmbed()
                .setTitle('**Un membre a quitté:**')
                .setColor('0x00AAFF')
                .setDescription(user + ' **a quitté le serveur.**')
                .setFooter(user.username, user.avatarURL)
                .setTimestamp()
            logger.send({ embed });
        }
    }
});


/*Log surnom changé*/
client.on('guildMemberUpdate', function (oldMember, newMember) {
    if (message.author.bot) return;
    var logger = newMember.guild.channels.get(process.env.LOGS);
    if (newMember.id != client.user.id) {
        if (newMember.nickname != oldMember.nickname) {
            if (logger != null) {
                const embed = new Discord.RichEmbed()
                    .setTitle('**Surnom modifié:**')
                    .setColor('0x00AAFF')
                    .setDescription('**Le surnom de** ' + oldMember.user.username + '#' + oldMember.user.discriminator + ' **a été changé en** ' + newMember.nickname + '.')
                    .setFooter(newMember.user.username, newMember.user.avatarURL)
                    .setTimestamp()
                logger.send({ embed });
            }
        }
    }
});


//=======================================//


/*Message bienvenue*/
client.on('guildMemberAdd', (member) => {
    var nom = member.user;
    var avatar = member.user.avatarURL;
    if (message.author.bot) return;
    member.guild.channels.get(process.env.WELCOM).send(`**\`\`\`Une nouvelle personne à rejoins le serveur.\`\`\`**\n***Bienvenue à toi ${nom} !***\n\n●      **${avatar}**      ●`)
});


//=======================================//


/*Mots bannis*/
client.on("message", (message) => {
    let listw = ["☭", "🖕", ":middle_finger:", "卐"]
    if (message.author.bot) return;
    if (message.guild.members.get(message.author.id).hasPermission("ADMINISTRATOR")) {
        if (message.content.includes(listw)) {
            message.delete();
        }
    }
});


client.on('messageUpdate', function (oldMessage, newMessage) {
    let listw = ["☭", "🖕", ":middle_finger:", "卐"]
    if (newMessage.author.bot) return;
    if (newMessage.member.hasPermission("ADMINISTRATOR")) {
        if (newMessage.content.includes(listw)) {
            message.delete();
        }
    }
});


//=======================================//


/*Invitations discord bannis*/
client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.guild.members.get(message.author.id).hasPermission("ADMINISTRATOR")) {
        if (message.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
            if (message.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
            else { message.delete(); }
        }
    }
});


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    if (newMessage.member.hasPermission("ADMINISTRATOR")) {
        if (newMessage.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
            if (newMessage.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
            else { newMessage.delete(); }
        }
    }
});


//=======================================//


/*Sécurité salon memes*/
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.id === process.env.MEMES) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            var links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
            if (message.attachments.size > 0 || message.content.match(links)) { }
            else {
                setTimeout(function () {
                    message.delete();
                }, 500);
            }
            if (message.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
                if (message.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
                else { message.delete(); }
            }
        }
    }
});


//=======================================//


/*Handling pour les commandes*/
fs.readdir('./commandes/', (error, f) => {
    if (error) { return console.error(error); }
    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }
    commandes.forEach((f) => {
        let commande = require(`./commandes/${f}`);
        console.log(`${f} chargée !`);
        client.commands.set(commande.help.name.toLowerCase(), commande);
    });
});


fs.readdir('./events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés !`);
    f.forEach((f) => {
        let events = require(`./events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    });
});


//=======================================//


client.login(process.env.TOKEN);
