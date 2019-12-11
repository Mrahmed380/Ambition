/*
 * @fichier: index.js
 * @Auteur: Koldran
 * @license Palindrome
 * @Ambition 2019
 */

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();


//=======================================================//


client.on('ready', function (){
    console.log("////////////////////////////////////////////////")
    console.log("////////// [!] Connexion effectué ! ////////////")
    console.log("////////////////////////////////////////////////")
})

//=======================================================//

client.on('guildMemberAdd', member => {
    var nom = member.user;
    var avatar = member.user.avatarURL;
    member.guild.channels.get(process.env.WELCOM).send(`**\`\`\`Une nouvelle personne à rejoins le serveur.\`\`\`**\n***Bienvenue à toi ${nom} !***\n\n●      **${avatar}**      ●`)
})

//=======================================================//

//Messsage supprimé.
client.on('messageDelete', message => {
    if (message.channel.type == 'text') {
        var logger = message.guild.channels.get(process.env.LOGS);
        if(message.author.id != client.user.id) {
            if (logger) {
                const embed = new Discord.RichEmbed()
                  .setTitle('**Message supprimé:**')
                  .setColor('0x00AAFF')
                  .setFooter(message.author.username, message.author.avatarURL)
                  .setDescription(message.cleanContent)
                  .setTimestamp()
                logger.send({ embed });
            }
        }
    }
});

//Message modifié.
client.on('messageUpdate', function(oldMessage, newMessage) {
    if (newMessage.channel.type == 'text' && newMessage.cleanContent != oldMessage.cleanContent) {
        var logger = newMessage.guild.channels.get(process.env.LOGS);
        if(newMessage.author.id != client.user.id) {
            if (logger != null) {
                const embed = new Discord.RichEmbed()
                  .setTitle('**Message modifié:**')
                  .setColor('0x00AAFF')
                  .setDescription('**- Avant modification:**\n' + oldMessage.cleanContent + '\n\n**- Après modification:**\n' + newMessage.cleanContent)
                  .setFooter(newMessage.author.username, newMessage.author.avatarURL)
                  .setTimestamp()
                logger.send({ embed });
            }
        }
    }
});

//Membre bannis.
client.on('guildBanAdd', function(guild, user,) {
    var logger = guild.channels.get(process.env.LOGS);
    if(user.id != client.user.id) {
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

//membre débannis.
client.on('guildBanRemove', function(guild, user) {
    var logger = guild.channels.get(process.env.LOGS);
    if(user.id != client.user.id) {
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

//Membre rejoin.
client.on('guildMemberAdd', function(guild, user) {
    var logger = guild.channels.get(process.env.LOGS);
    if(user.id != client.user.id) {
        if (logger != null){
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

//Membre quitté.
client.on('guildMemberRemove', function(guild, user) {
    var logger = guild.channels.get(process.env.LOGS);
    if(user.id != client.user.id) {
        if (logger != null){
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

//Surnom changé.
client.on('guildMemberUpdate', (oldMember, newMember) => {
    var logger = newMember.guild.channels.get(process.env.LOGS);
    if(newMember.id != client.user.id) {
        if(newMember.nickname != oldMember.nickname) {
            if (logger != null){
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

//=======================================================//

//Mots bannis.
client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){

        //====================================//

        if (message.content.includes('☭')) {
            message.delete()
        }

        //====================================//

        if (message.content.includes('🖕')) {
            message.delete()
        }

        //====================================//

        if (message.content.includes(':middle_finger:')) {
            message.delete()
        }

        //====================================//

        if (message.content.includes('卐')) {
            message.delete()
        }
    }
})

client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){

        //====================================//

        if(newMessage.content.includes('☭')){
            newMessage.delete()
        }

        //====================================//

        if(newMessage.content.includes('🖕')){
            newMessage.delete()
        }

        //====================================//

        if(newMessage.content.includes(':middle_finger:')){
            newMessage.delete()
        }

        //====================================//

        if(newMessage.content.includes('卐')){
            newMessage.delete()
        }
    }
})


//=======================================================//


//Liens bannis.
client.on("message", async message => {
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
        if (message.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
            if (message.content.includes('https://discord.gg/EweFGVR','https://discord.gg/dpFb93r')) {}
            else {
                message.delete()
            }
        }

    }
})


//=======================================================//


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (!newMessage.guild.member(newMessage.author).hasPermission('ADMINISTRATOR')){
        if(newMessage.content.includes('https://discord.gg/' || 'discordapp.com/invite/')){
            if(newMessage.content.includes('https://discord.gg/EweFGVR','https://discord.gg/dpFb93r')) {}
            else {
                newMessage.delete()
            }
        }
    }
})



//=======================================================//



//Le salon mêmes.
client.on("message", async message => {
    if (message.channel.id === process.env.MEMES) {
        if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')){
            var links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
            if (message.attachments.size > 0 || message.content.match(links)) {}
            else {
                setTimeout(function() {
                    message.delete();
                }, 500);
            }
        }
    }
})


//=======================================================//


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

//=======================================================//

fs.readdir('./events/', (error, f) => {
    if (error) { return console.error(error); }
        console.log(`${f.length} events chargés`);

        f.forEach((f) => {
            let events = require(`./events/${f}`);
            let event = f.split('.')[0];
            client.on(event, events.bind(null, client));
        });
});

//=======================================================//

client.login(process.env.TOKEN);
