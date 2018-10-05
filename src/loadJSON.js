const fs = require('fs');

let fullChamps = fs.readFileSync(`${__dirname}/../data/champions.json`);
let fullMaster = fs.readFileSync(`${__dirname}/../data/mastermind.json`);

const loadChamps = () =>{
    const pChamps = JSON.parse(fullChamps);
    for(const i = 0; i < pChamps.index; i++){
        champs.name = pChamps.name;
        champs.team = pChamps.team;
        champs.cards = pChamps.cards;
        champs.tags = pChamps.tags;
    }
    //console.log(champs[1]);
}

const loadMasterminds = () =>{
    const pMasterminds = JSON.parse(fullMaster);
    for(const i = 0; i < pMasterminds.index; i++){
        masterminds.name = pMasterminds.name;
        masterminds.team = pMasterminds.team;
        masterminds.cards = pMasterminds.cards;
        masterminds.tags = pMasterminds.tags;
    }
    //console.log(masterminds[1]);
};
module.exports = {
    loadChamps,
    loadMasterminds
};