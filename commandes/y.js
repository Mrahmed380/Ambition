const Discord = require("discord.js");


module.exports.run = (client, message, args) => {
	message.delete()
	const server = new Discord.RichEmbed()
		.setTitle(':bread: |  Pain argovien, fabriqué à partir d’une pâte moyennement ferme à base de farine bise ou mi-blanche.')
		.setImage('https://cdn.discordapp.com/attachments/614793809557192725/643475276621414442/Capture1.PNG')
	message.channel.send(server);
};

module.exports.help = {
    name: 'y'
};