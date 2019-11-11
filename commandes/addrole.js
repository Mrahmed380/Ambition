module.exports.run = (client, message, args) => {
    message.delete()
    if (!message.guild.member(message.author.id).hasPermission('MANAGE_ROLES')) { return message.channel.send(':no_entry_sign: |  Vous n\'avez pas la permission **gérer les roles** !').then(msg => msg.delete(5000)); }
    if (!message.guild.member(client.user.id).hasPermission('MANAGE_ROLES')) { return message.channel.send(':x: |  Je n\'ai pas la permission **gérer les roles** !').then(msg => msg.delete(5000)); }
    if (!args.join(' ')) { return message.channel.send(':question: |  Vous n\'avez pas la spécifié un nom de role !').then(msg => msg.delete(5000)); }
    
    let member = message.guild.member(message.author.id);
    let role = message.guild.roles.find((r) => r.name.toLowerCase() === args.join(' ').toLowerCase() || r.id === args.join(' '));

    if (!role) { return message.channel.send(':x: |  Ce role n\'existe pas !').then(msg => msg.delete(5000)); }
    if (member.roles.has(role.id)) { return message.channel.send(':x: |  Vous avez déjà ce role !').then(msg => msg.delete(5000)); }
    
        member.addRole(role.id)
            .then(() => message.channel.send(':white_check_mark: |  Vous avez désormais le role ' + role.toString())).then(msg => msg.delete(5000))
            .catch(console.error);
};

module.exports.help = {
    name: 'addrole'
};
