import { Router } from 'express';
import contratosRouter from './contratosRoutes.js';
import loginRouter from './loginRoutes.js';

function routerApi(app) {
    const router = Router();
    router.use('/contratos', contratosRouter);
    router.use('/login', loginRouter);
    
    app.use('/api/v1', router);
}

export default routerApi;