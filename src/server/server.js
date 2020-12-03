import fs from 'fs';
import path from 'path';
import handlebars from 'handlebars';

import Hapi from '@hapi/hapi';
import ReactDom from 'react-dom/server';
import React from 'react';

import { setPath } from 'hookrouter';
import App from '../App';

// const template = (content) => `
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <base href="/" />
//     <title>PokemonDesk</title>
//   </head>
//   <body>
//     <div id="root">${content}</div>
//   </body>
// </html>

// `;

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHtml = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHtml, 'utf8'));
      const result = ReactDom.renderToString(<App />);
      const page = template({
        content: result,
      });
      return page;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
