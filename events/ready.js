// @event: ready
// @Auteur: Koldran
// @license Palindrome


module.exports = (client) => {
  client.user.setActivity('moi, bordel !!!', { type: 'LISTENING' })
  .catch(console.error)
};
