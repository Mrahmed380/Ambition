// @event: message
// @Auteur: Koldran
// @license Palindrome


const Discord = require('discord.js');


//=======================================//


module.exports = async (client, message) => {
  const prefix = "=";


  //=======================================//


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);


  //=======================================//


  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();


  //=======================================//


  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) {
    command = client.commands.get(client.aliases.get(cmd)) 
  }.catch(err => {
    console.log(' ')
  })
  if (command) command.run(client, message, args);
};
