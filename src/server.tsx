import * as express from 'express';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';

import App from './App';

interface Context {
  url: string;
  status: number;
}

const server = express();
const port = 3000;

server.use(express.static('./dist'));

server.get('*', (req, res) => {
  const context = {} as Context;

  const app = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>,
  );

  if (context.url) {
    res.redirect(context.status, context.url);
  }

  res.send(`
    <!doctype html>
    <html>
      <head>
        <title>TS Starter</title>
      </head>
      <body style="margin:0">
        <div id="app">${app}</div>
        <script src="/client.js"></script>
      </body>
    </html>
  `);
});

server.listen(port);
console.log(`Magic port is at ${port}`);
