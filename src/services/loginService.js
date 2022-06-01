import boom from "@hapi/boom";
import Hashing from "../utils/hashing.js";

class LoginService {
    constructor() {
        
    }

    async login(email, password) {
        if (!email || !password) {
            throw boom.unauthorized('Usuario y/o contraseña no válidas');
        }



        Hashing.validateHash(password, hash);
    }
}

export default LoginService;