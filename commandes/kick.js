const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    message.delete()




    if (!message.guild.member(message.author).hasPermission('KICK_MEMBERS')) 
        { return message.channel.send(':no_entry_sign: |  Vous n\'avez pas la permission !').then(msg => msg.delete(5000)); }

    if (!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) 
        { return message.channel.send(':x: |  Je n\'ai pas la permission `gérer les roles` !').then(msg => msg.delete(5000)); }

    if (message.mentions.users.size === 0) 
        { return message.channel.send(':question: |  Vous devez mentionner un utilisateur !').then(msg => msg.delete(5000)); }




        let kickMember = message.guild.member(message.mentions.users.first());


        if (!kickMember) 
            { return message.channel.send(':question: |  Je n\'ai pas trouvé l\'utilisateur !'); }
        
    
        message.mentions.users.first().send(`:envelope_with_arrow: |  Vous êtes kick du serveur **${message.guild.name}** par ${message.author.username}`).then(msg => msg.delete(5000))
            .then(() => {
                kickMember.kick()
                    .then((member) => {
                        message.channel.send(`:hammer: |  ${member.user.username} est kick ! Par ${message.author.username}`).then(msg => msg.delete(5000));
                    })
                        .catch((err) => {
                            if (err) { return console.error(err); }
                        });
            })
                .catch((error) => {
                    if (error) { console.error(error); }
                        kickMember.kick()
                            .then((member) => {
                                message.channel.send(`:hammer: |  ${member.user.username} est kick ! Par ${message.author.username}`);
                            })
                                .catch((err) => {
                                    if (err) { return console.error(err); }
                                });
                });
};

module.exports.help = {
    name: 'kick'
};
