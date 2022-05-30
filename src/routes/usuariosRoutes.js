import { Router } from "express";
import UsuarioService from "../services/usuarioService.js";

const router = Router();
const service = new UsuarioService();

// Crear usuario
router.post('/', (req, res) => {
    const body = req.body;
    const newUsuario = service.create(body);
    res.status(201).json({
        message: 'Creado',
        data: newUsuario
    });
});

// Obtener todos los usuarios
router.get('/', (req, res) => {
    const usuarios = service.find();

    res.status(200).json({ data: usuarios });
});

// Obtener un usuario
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const usuario = service.findOne(id);
    res.status(200).json(usuario);
});

// Editar usuario
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const usuario = service.update(id, body);

    res.status(201).json(usuario);
});

// Eliminar usuario
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const rta = service.delete(id);

    res.json(rta);
});

export default router;