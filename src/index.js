const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./client/App').default;

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 8081;

app.get('/', (req, res) => {
    const content = renderToString(<App />);

    res.send(content);
});

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
