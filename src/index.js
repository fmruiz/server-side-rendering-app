import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App';

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 8081;

/**
 * Middlewares
 */
app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<App />);

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    res.send(html);
});

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
