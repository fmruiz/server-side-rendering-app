import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={{}}>
                <Routes />
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
                ${helmet.title.toString()};
                ${helmet.meta.toString()};
            </head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};
