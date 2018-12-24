import * as express from "express";
import * as path from "path";
import * as React from "react";
import * as Loadable from 'react-loadable';
import { getBundles } from "react-loadable/webpack";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import { Routes } from './routes';

const stats = require("../dist/stats/reactLoadable.json");

const server = express();

server.use('/assets', express.static(path.join(__dirname, "..", "assets")));

server.get('*', function (req: any, res: any): void {
    const context = {};
    let modules: any = [];

    const appString = renderToString(
      <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Loadable.Capture>
    );

    const bundles = getBundles(stats, modules);

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>

      <body>
        <div id="root">${appString}</div>
      </body>

      ${bundles.filter(bundle => bundle.file.endsWith(".js")).map(bundle => {
        return `<script src="/assets/${bundle.file}"></script>`
      }).join('\n')}
      <script src="/assets/bundle.js"></script>
    </html>
    `);
});


Loadable.preloadAll().then(() => {
  server.listen(3000, 'localhost');
});



