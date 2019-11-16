/**
 * @event: ready
 * @Auteur: Koldran
 * @license Palindrome
 **/

module.exports = (client) => {
    client.user.setActivity('le soleil fixement', { type: 'WATCHING' }).catch(console.error)
};
