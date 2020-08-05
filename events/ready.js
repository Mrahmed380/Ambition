// @event: ready
// @Auteur: Koldran
// @license Palindrome


const playing_list = [
    "faire chier son monde.",
    "brûler du PQ.",
    "regarder le soleil.",
    "sauter sur son lit.",
    "comprendre son existence.",
    "faire peur au fourmis.",
    "conduire dangereusement.",
    "s'auto coder.",
    "des jeux pas très net.",
    "invoquer un démon.",
    "être autiste.",
    "mordre les gens",
    "faire un petit personnage.",
    "creuser un trou.",
    "manger ses morts",
    "se cacher derrière toi.",
    "prendre des photos de toi.",
    "manger des croquettes.",
    "se jeter dans les escaliers.",
    "rigoler tout seul.",
    "invoquer Allah.",
    "manger son micro-ondes.",
    "boire de la javel.",
    "comploter contre Palindrome.",
    "se claquer la tete sur le sol.",
    "s'occuper de son pain de compagnie.",
    "démonter ses pieds.",
    "colorier de manière immonde comme un gosse de 5 ans.",
    "observer les gens qui dorment de manière bizarre.",
    "faire des bruits bizarre.",
    "la dinette sa mère.",
    "faire une pose en T.",
    "regarder de l'ASMR des yeux.",
    ];


const watching_list = [
    "le soleil fixement.",
    "les gens passer dehors.",
    "un documentaire.",
    "à travers le sol en pensant trouver un mineshaft.",
    "à l'intérieur de ses yeux.",
    "la marée en pensant trouver risitas.",
    "dans son sac magique.",
    "moi quand je te parle !",
    "moi tout ça ...",
    "moi bien, mon petit.",
    "les nuages.",
    "le ciel de ses morts.",
    "un gros en T pose.",
    ];


module.exports = (client) => {
  
    setInterval(function() {
        const index = Math.floor(Math.random() * (playing_list.length - 1) + 1);
        client.user.setActivity(playing_list[index], { type: 'PLAYING' });
    }, 1800000);
   
    client.user.setStatus('dnd').catch(err => {console.error});
};
