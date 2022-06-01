import { Router } from "express";
import Hashing from "../utils/hashing.js";
import LoginService from "../services/loginService.js";

const router = Router();
const service = new LoginService();

router.post('/', async (req, res, e) =>  {
    try {
        const { email, password } = req.body;

        const result = await service.login(email, password);
    } catch (e) {
        next(e);
    }
});

export default router;