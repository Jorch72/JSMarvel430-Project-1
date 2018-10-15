const http = require('http');
const url = require('url');
const query = require('querystring');

const htmlHandler = require('./htmlResponses.js');

const jsonHandler = require('./jsonResponse.js');

const loadHandler = require('./loadJSON.js');


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const loadFiles = () => {
  loadHandler.loadChamps();
  loadHandler.loadMasterminds();
};

// get the game
const getRequest = (request, response, parsedUrl) => {
const requirements = query.parse(parsedUrl.query);
  switch (parsedUrl.pathname) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;

    case '/style.css':
      htmlHandler.getCSS(request, response);
      break;

    case '/getGame':
      jsonHandler.getGame(request, response, requirements);
      break;

    default:
      jsonHandler.getUnreal(request, response);
      break;
  }
};

const headRequest = (request, response, parsedUrl) => {
  switch (parsedUrl.pathname) {
    case '/saveGame':
    
      break;

    default:
      jsonHandler.getUnrealMeta(request, response);
      break;
  }
};

const postRequest = (request, response, parsedUrl) => {
  

  switch (parsedUrl.pathname) {
    case '/saveGame':
      // Missing fields
      if (newGame.name === '' || newGame.team === '') {
        const responseJSON = {
          id: 'missingParams',
          message: 'Required fields missing',
        };
        const parsedResponse = JSON.stringify(responseJSON);

        response.writeHead(400, { 'Content-Type': 'application/json' });
        response.write(parsedResponse);
        response.end();
      } else {
        jsonHandler.addTeam(request, response, newTeam);
      }
      break;

    default:
      response.end();
      break;
  }
};

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  switch (request.method) {
    case 'GET':
      getRequest(request, response, parsedUrl);
      break;

    case 'HEAD':
      headRequest(request, response, parsedUrl);
      break;

    case 'POST':
      postRequest(request, response, parsedUrl);
      break;

    default:
      response.writeHead(501);
      response.end();
      break;
  }
};

http.createServer(onRequest).listen(port);
loadFiles();
console.log(`Listening on localhost:${port}...`);
