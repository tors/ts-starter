import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';

import App from './App';

const server = express();
const port = 3000;

server.use(express.static('./dist'));

server.get('/', (req, res) => {
  const app = renderToString(React.createElement(App));
  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>TS Starter</title>
        <script src="/client.js"></script>
      </head>
      <body style="margin:0">
        <div id="app">${app}</div>
      </body>
    </html>
  `);
});

server.listen(port);
console.log(`Magic port is at ${port}`);
