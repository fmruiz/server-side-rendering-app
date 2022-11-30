import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

/**
 * Express initialization
 */
const app = express();
const port = process.env.PORT || 8081;

/**
 * Middlewares
 */
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    res.send(renderer(req, store));
});

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
