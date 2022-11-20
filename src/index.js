const express = require('express');
const React = require('react');
const renderToString = 'react-dom/server'.renderToString;
const Home = require('./client/components/Home').default;

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const content = renderToString(<Home />);

    res.send(content);
});

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
