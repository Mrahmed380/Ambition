// @event: welcom
// @Auteur: Koldran
// @license Palindrome


module.exports = (client) => {
    let listw = ["☭", "🖕", ":middle_finger:", "卐"]
    if (message.author.bot) return;
    if (!message.guild.members.get(message.author.id).hasPermission("ADMINISTRATOR")) {
        if (message.content.includes(listw)) {
            message.delete();
        }
    }
};
