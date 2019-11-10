const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function (){
	bot.user.setActivity('le soleil fixement', { type: 'WATCHING' }).catch(console.error)
	console.log("////////////////////////////////////////////////")
	console.log("////////// [!] Connexion effectué ! ////////////")
	console.log("////////////////////////////////////////////////")
})


bot.on('message', function (message){
	if (message.content === '=help'){
		message.channel.send("C'est du pain !")
	}

	if (message.content === '=serveur'){
		message.delete()
		var serveur_size = message.guild.name
		var serveur_members = message.guild.members.size
		message.channel.send('serveur: ' + serveur_size + '\npersonnes: ' + serveur_members)
	}

})


bot.login(process.env.TOKEN)