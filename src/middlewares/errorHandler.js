/**
 * 
 * @param {Error} err Error capturado
 * @param {Express.Request} req Petición
 * @param {Express.Response} res Respuesta
 * @param {NextResponse} next Funcion que envia al siguiente endpoint
 */
export function logErrors(err, req, res, next) {
    console.error(err);
    next(err);
}

export function errorHandler(err, req, res, next) {
    res.status(500).json({
        message: err.message,
        stack: error.stack
    })    
}

export function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
        const { output } = err;
        res.status(output.statusCode).json(output.payload);
    }

    next(err);
}