import ConnDb from '../models/conn/dbConn.js';
import { faker } from '@faker-js/faker';
import boom from '@hapi/boom';

class UsuarioService {
    constructor() {
        this.usuarios = [];
        this.generate();
    }

    generate() {
        const limit = 100;

        for (let i = 0; i < limit; i++) {
            this.usuarios.push({
                id: faker.datatype.uuid(),
                nombres: `${faker.name.firstName()} ${faker.name.lastName()}`,
                email: `${faker.internet.email()}`,
                bloqueado: faker.datatype.boolean(),
                fecha_ultima_sesion: faker.date.past(),
                cliente: {
                    nombre: faker.company.companyName(),
                    nit: faker.datatype.number({ min: 800000000, max: 999999999 })
                }
            })
        }
    }

    async create(data) {
        const { nombres, email, cliente } = data;
        const newUsuario = {
            id: faker.datatype.uuid(),
            nombres,
            email,
            bloqueado: false,
            fecha_ultima_sesion: new Date(),
            cliente
        };
        this.usuarios.push(newUsuario);
        return newUsuario;
    }

    async find() {
        return this.usuarios;
    }

    async findOne(id) {
        const usuario = this.usuarios.find(item => item.id === id);

        if (!usuario) throw boom.notFound('No se encontró el usuario');

        return usuario;
    }

    async update(id, changes) {
        const index = this.usuarios.findIndex(item => item.id === id);

        if (index === -1) {
            throw boom.notFound('No se encontró el usuario');
        }

        const usuario = this.usuarios[index];
        this.usuarios[index] = {
            ...usuario,
            ...changes
        };

        return this.usuarios[index];
    }

    /**
     * @
     * 
     * @param {string} id Id del usuario
     * @returns El id del usuario que se borro
     */
    async delete(id) {
        const index = this.usuarios.findIndex(item => item.id === id);

        if (index === -1) {
            throw boom.notFound('No se encontró el usuario');
        }

        this.usuarios.splice(index, 1);
        return { id };
    }
}

export default UsuarioService;