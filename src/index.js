import express from 'express';
import renderer from './helpers/renderer';

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
    res.send(renderer(req));
});

/**
 * Server initialization
 */
app.listen(port, () => console.log(`Server UP in port ===> ${port}`));
