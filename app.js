const http = require('http');

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
        res.writeHead(200);
        res.end(`We received ${methodType} type request`);
        break;
      case 'POST':
        res.writeHead(200);
        res.end(`We received ${methodType} type request`);
        break;
      case 'PUT':
        res.writeHead(200);
        res.end(`We received ${methodType} type request`);
        break;
      case 'DELETE':
        res.writeHead(200);
        res.end(`We received ${methodType} type request`);
        break;
    }
  } catch (error) {
    res.writeHead(400);
    res.end(error.message);
  }
};

const server = http.createServer(requestListener);
server.listen(3000);
