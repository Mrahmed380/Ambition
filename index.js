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


client.on('guildMemberAdd', (member) => {
    var nom = member.user;
    var avatar = member.user.avatarURL;
    if (avatar === null) { avatar = member.user.displayAvatarURL }
    
    if (member.guild.id === "501824700486516766") {
        member.guild.channels.get('534443162949910537').send(`**\`\`\`Une nouvelle personne à rejoins le serveur.\`\`\`**\n***Bienvenue à toi ${nom} !***\n\n●      **${avatar}**      ●`)
    }
    else {
        member.send(`C'est ici que vous pourrez faire vos demandes, dans le salon #●demandes●. Après votre demande, veuillez patienter, car nous ne sommes peut-être pas connectés ou non disponibles.\n**Veuillez présenter ça sous la forme suivante, pour la compréhension des membres du staff :**\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\`\`\`Sujet de la demande, en gros qu'est-ce que c'est. (exemple, un rôle perdu ou une erreur du staff)\`\`\`\n- Mention du rôle modérateur ou administrateur.\n\n> - Votre nom sur le serveur, pour vous trouver plus facilement. (Veuillez utiliser (>>> votre message) pour faire l'encadrement)\n>  \n> - Une description simple de votre problème.\n>  \n> - Une demande objective de ce que vous voulez au final. (s'il y en à une bien sûr)\n\n${member}`)
    }
});

//=======================================//


client.on("message", (message) => {
    if (message.author.bot) return;
    if (message.content.includes("☭")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir.')
                message.author.send(s1);
            });
        }
    }
    if (message.content.includes("🖕")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir.')
                message.author.send(s1);
            });
        }
    }
    if (message.content.includes(":middle_finger:")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir.')
                message.author.send(s1);
            });
        }
    }
    if (message.content.includes("卐")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            message.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir.')
                message.author.send(s1);
            });
        }
    }
});


client.on('messageUpdate', function (oldMessage, newMessage) {
    if (newMessage.author.bot) return;
    if (newMessage.content.includes("☭")) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
            newMessage.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir. (c\'est pas en éditant un message que cela passera...)')
                newMessage.author.send(s1);
            });
        }
    }
    if (newMessage.content.includes("🖕")) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
            newMessage.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir. (c\'est pas en éditant un message que cela passera...)')
                newMessage.author.send(s1);
            });
        }
    }
    if (newMessage.content.includes(":middle_finger:")) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
            newMessage.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir. (c\'est pas en éditant un message que cela passera...)')
                newMessage.author.send(s1);
            });
        }
    }
    if (newMessage.content.includes("卐")) {
        if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
            newMessage.delete()
            .then(message => {
                const s1 = new Discord.RichEmbed()
                    .setColor('#2f3136')
                    .setTitle(':no_entry_sign: |  Veuillez ne plus envoyer cela à l\'avenir. (c\'est pas en éditant un message que cela passera...)')
                newMessage.author.send(s1);
            });
        }
    }
});


//=======================================//


client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        if (message.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
            if (message.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
            else {
                message.delete()
                .then(message => {
                    const s1 = new Discord.RichEmbed()
                        .setColor('#2f3136')
                        .setTitle(':no_entry_sign: |  Veuillez ne pas envoyer d\'invitation sur le serveur discord. Faite le au moins en privée, même si c\'est mal poli de le faire.')
                    message.author.send(s1);
                });
            }
        }
    }
});


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    if (!newMessage.member.hasPermission("ADMINISTRATOR")) {
        if (newMessage.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
            if (newMessage.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
            else {
                newMessage.delete()
                .then(message => {
                    const s1 = new Discord.RichEmbed()
                        .setColor('#2f3136')
                        .setTitle(':no_entry_sign: |  Veuillez ne pas envoyer d\'invitation sur le serveur discord. Faite le au moins en privée, même si c\'est mal poli de le faire. (c\'est pas en éditant un message que cela passera...)')
                    newMessage.author.send(s1);
                });
            }
        }
    }
});


//=======================================//


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.id === "593833705970073620") {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            var links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
            if (message.attachments.size > 0 || message.content.match(links)) {
                
            }
            else {
                setTimeout(function () {
                    message.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle(':no_entry_sign: |  Veuillez ne pas écrire dans le salon memes.')
                        message.author.send(s1);
                    });
                }, 500);
            }
            if (message.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
                if (message.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
                else {
                    message.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle(':no_entry_sign: |  Veuillez ne pas écrire dans le salon memes.')
                        message.author.send(s1);
                    });
                }
            }
        }
    }
});


client.on('messageUpdate', (oldMessage, newMessage) => {
    if (newMessage.author.bot) return;
    if (newMessage.channel.id === "593833705970073620") {
        if (!newMessage.member.hasPermission('ADMINISTRATOR')) {
            var links = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gmi;
            if (newMessage.attachments.size > 0 || newMessage.content.match(links)) {
                
            }
            else {
                setTimeout(function () {
                    newMessage.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle(':no_entry_sign: |  Veuillez ne pas écrire dans le salon memes. (c\'est pas en éditant un message que cela passera...)')
                        newMessage.author.send(s1);
                    });
                }, 500);
            }
            if (newMessage.content.includes('https://discord.gg/' || 'discordapp.com/invite/')) {
                if (newMessage.content.includes('https://discord.gg/EweFGVR', 'https://discord.gg/dpFb93r')) { }
                else {
                    newMessage.delete()
                    .then(message => {
                        const s1 = new Discord.RichEmbed()
                            .setColor('#2f3136')
                            .setTitle(':no_entry_sign: |  Veuillez ne pas écrire dans le salon memes. (c\'est pas en éditant un message que cela passera...)')
                        newMessage.author.send(s1);
                    });
                }
            }
        }
    }
});


//=======================================//


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
