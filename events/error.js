/**
 * @event: error
 * @Auteur: Koldran
 * @license Palindrome
 **/
 
module.exports = class {
  constructor (client) {
    this.client = client;
  }

  async run (error) {
    this.client.logger.log(`Une erreur d'évent à était envoyé par Discord.js: \n${JSON.stringify(error)}`, "error.");
  }
};