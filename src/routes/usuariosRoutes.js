import { Router } from "express";
import UsuarioService from "../services/usuarioService.js";
import ValidatorHandler from "../middlewares/validatorHandler.js";
import { getUsuarioSchema, createUsuarioSchema, updateUsuarioSchema } from "../schemas/usuarioSchema.js";
import validatorHandler from "../middlewares/validatorHandler.js";

const router = Router();
const service = new UsuarioService();

// Crear usuario
router.post('/',
    validatorHandler(createUsuarioSchema, 'body'),
    async (req, res) => {
        const body = req.body;
        const newUsuario = await service.create(body);
        res.status(201).json({
            message: 'Creado',
            data: newUsuario
        });
    }
);

// Obtener todos los usuarios
router.get('/', 
    // validatorHandler(getUsuarioSchema, 'params'),
    async (req, res, next) => {
        try {
            const usuarios = await service.find();

            res.status(200).json({ data: usuarios });
        } catch (e) {
            next(e);
        }
    }
);

// Obtener un usuario
router.get('/:id',
    validatorHandler(getUsuarioSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const usuario = await service.findOne(id);
            res.status(200).json(usuario);
        } catch (e) {
            next(e);
        }
    }
);

// Editar usuario
router.patch('/:id',
    validatorHandler(getUsuarioSchema, 'params'),
    validatorHandler(updateUsuarioSchema, 'body'),
    async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;

            const usuario = await service.update(id, body);

            res.status(201).json(usuario);
        } catch (e) {
            res.status(404).json({
                message: e.message
            });
        }
}
);

// Eliminar usuario
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await service.delete(id);

    res.json(rta);
});

export default router;