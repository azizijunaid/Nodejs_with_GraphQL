const http = require('http');
const helper = require('./helper/getHelper');
const url = require('url');

const REQUIRED_CONTENT_TYPE = 'application/json';
const ACCEPT_ENCODING_1 = 'application/json';
const ACCEPT_ENCODING_2 = '*/*';

const entryCheck = function (req) {
  const contentType = req.headers['content-type'];
  if (!contentType.includes(REQUIRED_CONTENT_TYPE)) {
    throw new Error('Sorry we only support content type as json format.');
  }

  const accept = req.headers['accept'];
  if (
    !(accept.includes(ACCEPT_ENCODING_1) || accept.includes(ACCEPT_ENCODING_2))
  ) {
    throw new Error('Sorry we only support accept json format.');
  }
};

const requestListener = function (req, res) {
  try {
    entryCheck(req);
    const methodType = req.method.toUpperCase();
    switch (methodType) {
      case 'GET':
        // res.writeHead(200);
        // res.end(`We received ${methodType} type request`);
        try {
          const { pathname } = url.parse(req.url);
          if(pathname == '/getAll'){
            helper.getAllEmployees(req, res);
            return;
          }
          helper.getMethodHandler(req.url, req, res);
        } catch (error) {
          console.log('error', error)
        }
        break;
      case 'POST':
        // res.writeHead(200);
        // res.end(`We received ${methodType} type request`);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
          helper.postMethodHandler(res, JSON.parse(body));
        });
        break;
      case 'PUT':
        // res.writeHead(200);
        // res.end(`We received ${methodType} type request`);
        let payload = '';
        req.on('data', chunk => {
          payload += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {
          helper.updateEmployee(req, res, JSON.parse(payload));
        });
        break;
      case 'DELETE':
        // res.writeHead(200);
        // res.end(`We received ${methodType} type request`);
        const { pathname } = url.parse(req.url);
        const id = pathname.substring(1);
        console.log("🚀 ~ file: app.js:68  pathname", id)
        helper.deleteEmployee(id, req, res);
        break;
    }
  } catch (error) {
    res.writeHead(400);
    res.end(error.message);
  }
};


const server = http.createServer(requestListener);
server.listen(3000);
