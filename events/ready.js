module.exports = (client) => {
    client.user.setActivity('le soleil fixement', { type: 'WATCHING' }).catch(console.error)
};
