// Data held in memory
const teams = [];

// current team
const team = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};
const getGame = (request, response, requirements) =>{
    var mastermind = getCards('mastermind','');
    var champs = getCards('champ',requirements);
    const responsJSON = {
        team,
    };
    responsJSON(request, responsJSON, 200, responsJSON);
    
}

const addTeam = (request, response, newTeam) => {

  if (teams[newTeam.name] == null) {
    const responseJSON = {
      message: `Team Saved as ${newTeam.name}`,
    };
    const parsedResponse = JSON.stringify(responseJSON);

    teams[newTeam.name] = newTeam;
    response.writeHead(201, { 'Content-Type': 'application/json' });
    response.write(parsedResponse);
    response.end();
  } else { // Updated user
    teams[newTeam.name] = newTeam;
    response.writeHead(204, { 'Content-Type': 'application/json' });
    response.end();
  }
};

const getUnreal = (request, response) => {
  const responseJSON = {
    id: 'notFound',
    message: 'The page you were looking for was not found',
  };
  const parsedResponse = JSON.stringify(responseJSON);

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.write(parsedResponse);
  response.end();
};

const getUnrealMeta = (request, response) => {
  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.end();
};

module.exports.getGame = getGame;

module.exports.addTeam = addTeam;
module.exports.getUnreal = getUnreal;
module.exports.getUnrealMeta = getUnrealMeta;
