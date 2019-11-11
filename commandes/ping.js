const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
	message.delete()
    let début = Date.now();
    message.channel.send(':outbox_tray: |  Ping')
        .then((m) => m.edit(`:inbox_tray: |  Pain : **${Date.now() - début}**ms`));
};

module.exports.help = {
    name: 'ping'
};
