import { Router } from 'express';
import contratosRouter from './contratosRoutes.js';
import loginRouter from './loginRoutes.js';
import usuariosRouter from './usuariosRoutes.js'
import contratosGestionadosRouter from './contratosGestionadosRoutes.js';

function routerApi(app) {
    const router = Router();
    // Rutas contratos
    router.use('/contratos', contratosRouter);

    //Rutas usuarios
    router.use('/usuarios', usuariosRouter);

    // Rutas login
    router.use('/login', loginRouter);

    // Rutas contratos gestionados
    router.use('/contratos_gestionados', contratosGestionadosRouter);
    
    app.use('/api/v1', router);
}

export default routerApi;