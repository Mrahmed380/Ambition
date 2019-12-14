// @event: ready
// @Auteur: Koldran
// @license Palindrome


module.exports = (client) => {
  client.user.setActivity('moi... Je fait le dab.', { type: 'WATCHING' })
  .catch(console.error)
};
