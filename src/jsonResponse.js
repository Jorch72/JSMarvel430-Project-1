//arrays of cards
const champs = [];
const masterminds = [];

//save teams
const teams = [];

//created game
const currentGame = {};

const respondJSON = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const respondJSONMeta = (request, response, status) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.end();
};

const getMastermind = () => {
    const requirements = "none";
    const i = 1; //this will be changed later to be a random number
    
    //console.log(masterminds[i].name);

    
    const copy = masterminds.slice(i);
    currentGame.mastermind = copy;
    
    getChamps(requirements);
}
const getChamps = (req)=> {
    if(req === "none"){
        for(const b = 0; b < 4; b++){
            const copy = champs.slice(b);
            currentGame.champions = copy;
        }
    }else {
        //switch statement to pull certian champions based on requirements
        const copy = champs.slice(i);
            currentGame.champions[i] = copy; 
        console.log("fail")
    }
    
}

const getGame = (request, response) => {
  if (request.method === 'GET') {
      
      getMastermind();
      console.log(currentGame.mastermind.name);
      
    const responseJSON = {
      currentGame,
    };

    respondJSON(request, response, 200, responseJSON);
  } else {
    respondJSONMeta(request, response, 200);
  }
};

const notReal = (request, response) => {
  if (request.method === 'GET') {
    const responseJSON = {
      id: 'notFound',
      message: 'The page you are looking for was not found',
    };

    respondJSON(request, response, 404, responseJSON);
  } else {
    respondJSONMeta(request, response, 404);
  }
};

module.exports = {
  getGame,
  notReal,
};