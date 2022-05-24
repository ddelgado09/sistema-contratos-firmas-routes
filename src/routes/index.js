import { Router } from 'express';
import contratosRouter from './contratosRoutes.js';

function routerApi(app) {
    const router = Router();
    app.use('/contratos', contratosRouter);
}

export default routerApi;