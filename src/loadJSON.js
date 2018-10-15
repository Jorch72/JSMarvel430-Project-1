const fs = require('fs');

const fullChamps = fs.readFileSync(`${__dirname}/../data/champions.json`);
const fullMaster = fs.readFileSync(`${__dirname}/../data/mastermind.json`);

// champs array
const champs = [];

// masterminds
const masterminds = [];

const loadChamps = () => {
  const pChamps = JSON.parse(fullChamps);
  for (let i = 0; i < pChamps.index; i++) {
    champs.name = pChamps.name;
    champs.team = pChamps.team;
    champs.cards = pChamps.cards;
    champs.tags = pChamps.tags;
  }
};

const loadMasterminds = () => {
  const pMasterminds = JSON.parse(fullMaster);
  for (let i = 0; i < pMasterminds.index; i++) {
    masterminds.name = pMasterminds.name;
    masterminds.team = pMasterminds.team;
    masterminds.cards = pMasterminds.cards;
    masterminds.tags = pMasterminds.tags;
  }
};

const getCards = (type, requirements) => {
  const set = [];
  let card;
  if (type === 'champ') {
    if (requirements.lengths !== 0 || requirements !== '') {
      requirements.forEach((tag) => {
        for (let i = 0; i < champs.length; i++) {
          switch (tag) {
            case champs[i].name:
              card = champs.slice(i);
              set.push(card);
              break;
            case champs[i].team:
              card = champs.slice(i);
              set.push(card);
              break;
            default:
              card = champs.slice(i);
              set.push(card);
              break;
          }
        }
      });
    } else {
      const num = Math.floor(Math.random() * (champs.length - 1));
      card = champs.slice(num);
      set.push(card);
    }
  }
  if (type === 'mastermind') {
    const num = Math.floor(Math.random() * (champs.length - 1));
    card = masterminds.slice(num);
    set.push(card);
  }
  return set;
};

module.exports = {
  loadChamps,
  loadMasterminds,
  getCards,
};
