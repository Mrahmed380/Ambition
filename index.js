// @fichier: index.js
// @Auteur: Koldran
// @license Palindrome
// @Ambition 2019


//=======================================//


const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


//=======================================//


client.on('ready', function () {
    console.log("////////////////////////////////////////////////")
    console.log("////////// [!] Connexion effectué ! ////////////")
    console.log("////////////////////////////////////////////////")
});


//=======================================//


client.on('guildMemberAdd', (member) => {
    let avatar = member.user.displayAvatarURL;
    if (member.guild.id === "501824700486516766") {
        const welcom = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle(`**\`\`\`Une nouvelle personne à rejoint le serveur.\`\`\`**`)
            .setDescription(`**Bienvenue à toi ${member} !**`)
            .setThumbnail(avatar)
        member.guild.channels.get('534443162949910537').send(welcom);
    } else {
        const s1 = new Discord.RichEmbed()
            .setColor('#2f3136')
            .setTitle('Bienvenue sur le serveur staff, c\'est ici que vous pourrez faire vos demandes. Pour faire une demande valide, veuillez suivre le même schéma que l\'image si dessous. Si votre demande ne suit pas celui-ci, elle n\'aura pas de suite.')
            .setImage('https://cdn.discordapp.com/attachments/594977170850447411/660175563779997726/Annotation_2019-12-27_184139.png')
        member.send(s1);
    }
});


//=======================================//


// client.on("message", (message) => {
    // if (message.content === "react" && message.channel.type === "dm") {
        // let guild = client.guilds.get('501824700486516766');
        // let channel = client.channels.get('501825319531970560')
        // if (!guild.member(message.author)) {return;} else {
           // message.react('✅')
                // .then(message => {
                    // message.guild.fetchChannel("501825319531970560");
                    // const guildMember = message.member;
                    // guildMember.addRole('439191493169643521');  
                // });
        // }
    // } else {
      // return;
    // }
// });


//=======================================//


client.on("message", (message) => {
    if (message.author.bot) return;
    const filteredwords = ['☭', '🖕', ':middle_finger:', '卐']
    if ((new RegExp(filteredwords.join('|'))).test(message.content)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
                .then(message => {
                    const s1 = new Discord.RichEmbed()
                        .setColor('#2f3136')
                        .setTitle('🚫 |  Veuillez ne plus envoyer cela à l\'avenir.')
                    message.author.send(s1);
                });
        }
    }
});


client.on('messageUpdate', function (oldMessage, newMessage) {
    if (newMessage.author.bot) return;
    const filteredwords = ['☭', '🖕', ':middle_finger:', '卐']
    if ((new RegExp(filteredwords.join('|'))).test(newMessage.content)) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
            newMessage.delete()
                .then(message => {
                    const s1 = new Discord.RichEmbed()
                        .setColor('#2f3136')
                        .setTitle('🚫 |  Veuillez ne plus envoyer cela à l\'avenir. (c\'est pas en éditant un message que cela passera...)')
                    newMessage.author.send(s1);
                });
        }
    }
});


//=======================================//


// client.on("message", async message => {
//    if (message.channel.id === "593833705970073620") {
//        return; 
//    } else {
//        let name = 'ui';
//        let def = name.toLowerCase();
//        let name2 = 'chancla';
//        let def2 = name2.toLowerCase();
//        if (message.author.bot) return;
//        if (message.content.includes(def)) {
//            await message.react('🇺');
//            await message.react('ℹ️');
//        }
//        if (message.content.includes(def2)) {
//            await message.react('🅱️');
//        }
//    }
//});


//client.on('messageUpdate', async (oldMessage, newMessage) => {
//    if (newMessage.channel.id === "593833705970073620") {
//        return; 
//    } else {
//        let name = 'ui';
//        let def = name.toLowerCase();
//        let name2 = 'chancla';
//        let def2 = name2.toLowerCase();
//       if (newMessage.author.bot) return;
//        if (newMessage.content.includes(def)) {
//            await newMessage.react('🇺');
//            await newMessage.react('ℹ️');
//        }
//        if (newMessage.content.includes(def2)) {
//            await newMessage.react('🅱️');
//        }
//    }
//});


//=======================================//


client.on("message", (message) => {
    if (message.author.bot) return;
        const links = ['https://discord.gg/', 'discordapp.com/invite/']
        if ((new RegExp(links.join('|'))).test(message.content)) {
            const filteredwords = ['https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r', 'https://discordapp.com/invite/EweFGVR', 'https://discordapp.com/invite/dpFb93r']
            if ((new RegExp(filteredwords.join('|'))).test(message.content)) {} else {
                if (!message.member.hasPermission("ADMINISTRATOR")) {
                    message.delete()
                        .then(message => {
                            const s1 = new Discord.RichEmbed()
                                .setColor('#2f3136')
                                .setTitle('🚫 |  Veuillez ne pas envoyer d\'invitation sur le serveur discord. Faite le au moins en privée, même si c\'est mal poli de le faire.')
                            message.author.send(s1);
                        });
                } else {
                  return;
                }
            }
        }
});


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
        const links = ['https://discord.gg/', 'discordapp.com/invite/']
        if ((new RegExp(links.join('|'))).test(newMessage.content)) {
            const filteredwords = ['https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r', 'https://discordapp.com/invite/EweFGVR', 'https://discordapp.com/invite/dpFb93r']
            if ((new RegExp(filteredwords.join('|'))).test(newMessage.content)) {} else {
                if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
                    newMessage.delete()
                        .then(message => {
                            const s1 = new Discord.RichEmbed()
                                .setColor('#2f3136')
                                .setTitle('🚫 |  Veuillez ne pas envoyer d\'invitation sur le serveur discord. Faite le au moins en privée, même si c\'est mal poli de le faire. (c\'est pas en éditant un message que cela passera...)')
                            newMessage.author.send(s1);
                        });
                } else {
                  return;
                }
            }
        }
    
});


//=======================================//


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.id === "593833705970073620") {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
        const links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
        if (message.attachments.size > 0 || message.content.match(links)) {
            if (message.attachments.size > 0 && message.content.length > 0) {
                message.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle('🚫 |  Veuillez envoyer vos fichiers sans ajouter de commentaire.')
                        message.author.send(s1);
                    });
            }
        } else {
            setTimeout(function () {
                message.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle('🚫 |  Veuillez ne pas écrire dans le salon memes.')
                        message.author.send(s1);
                    });
            }, 500);
        }
        const links2 = ['https://discord.gg/', 'discordapp.com/invite/']
        if ((new RegExp(links2.join('|'))).test(message.content)) {
            const filteredwords = ['https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r', 'https://discordapp.com/invite/EweFGVR', 'https://discordapp.com/invite/dpFb93r']
            if ((new RegExp(filteredwords.join('|'))).test(message.content)) {} else {
                message.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle('🚫 |  Veuillez ne pas écrire dans le salon memes.')
                        message.author.send(s1);
                    });
            }
        }
        } else {
          return;
        }
    }
});


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    if (newMessage.channel.id === "593833705970073620") {
        if (!newMessage.member.hasPermission('ADMINISTRATOR')) {
            const links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
            if (newMessage.attachments.size > 0 || newMessage.content.match(links)) {
                if (newMessage.attachments.size > 0 && newMessage.content.length > 0) {
                    newMessage.delete()
                        .then(message => {
                            const s1 = new Discord.RichEmbed()
                                .setColor('#2f3136')
                                .setTitle('🚫 |  Veuillez envoyer vos fichiers sans ajouter de commentaire. (c\'est pas en éditant un message que cela passera...)')
                            newMessage.author.send(s1);
                        });
                }
            } else {
                setTimeout(function () {
                    newMessage.delete()
                        .then(message => {
                            const s1 = new Discord.RichEmbed()
                                .setColor('#2f3136')
                                .setTitle('🚫 |  Veuillez ne pas écrire dans le salon memes. (c\'est pas en éditant un message que cela passera...)')
                            newMessage.author.send(s1);
                        });
                }, 500);
            }
            const links2 = ['https://discord.gg/', 'discordapp.com/invite/']
            if ((new RegExp(links2.join('|'))).test(newMessage.content)) {
                const filteredwords = ['https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r', 'https://discordapp.com/invite/EweFGVR', 'https://discordapp.com/invite/dpFb93r']
                if ((new RegExp(filteredwords.join('|'))).test(newMessage.content)) {} else {
                    newMessage.delete()
                        .then(message => {
                            const s1 = new Discord.RichEmbed()
                                .setColor('#2f3136')
                                .setTitle('🚫 |  Veuillez ne pas écrire dans le salon memes. (c\'est pas en éditant un message que cela passera...)')
                            newMessage.author.send(s1);
                        });
                }
            }
        } else {
          return;
        }
    }
});


//=======================================//


fs.readdir('./commandes/', (error, f) => {
    if (error) {
        return console.error(error);
    }
    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if (commandes.length <= 0) {
        return console.log('Aucune commande trouvée !');
    }
    commandes.forEach((f) => {
        let commande = require(`./commandes/${f}`);
        console.log(`${f} chargée !`);
        client.commands.set(commande.help.name.toLowerCase(), commande);
    });
});


fs.readdir('./events/', (error, f) => {
    if (error) {
        return console.error(error);
    }
    console.log(`${f.length} events chargés !`);
    f.forEach((f) => {
        let events = require(`./events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    });
});


//=======================================//


client.login(process.env.TOKEN);
