import { Router } from "express";
import UsuarioModel from './../models/usuarioModel.js';
import Hashing from "../utils/hashing.js";

const router = Router();

router.post('/', async (req, res) =>  {
    const { email, password } = req.body;

    if (!email || !password) {
        res.json({
            error: 'Usuario o contraseña incorrectos'
        });
        return;
    }

    const u = new UsuarioModel()
    u.email = email;
    const result = await u.getUsuario();
    
    if (!result) {
        res.status(401).json({ error: 'No hay ningún usuario con las credenciales indicadas' });
        return;
    }

    const user = result[0];
    const match = Hashing.validateHash(password, user.password);

    if (!match) {
        res.json({
            login: false,
            message: 'La contraseña es incorrecta'
        });
        return;
    }

    res.json({
        login: true,
        message: 'Inicio de sesión correcto',
        data: user
    });
});

export default router;