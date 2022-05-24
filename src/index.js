import express from 'express';
import routerApi from './routes/index.js';

const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Hola mundo');
});

routerApi(app);

app.listen(port, () => {
    console.log(`Servidor ejecutandose en el puerto ${port}`);
})