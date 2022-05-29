import ConnDb from './conn/dbConn.js';

export default class UsuariosModel {
    constructor(id = 0, nombres = '', email = '') {
        this._id = id;
        this._nombres = nombres;
        this._email = email;

        this._conn = ConnDb.getDbConn();
    }

    async getUsuario() {
        let sql = 'SELECT id, nombres, email, password, bloqueado, sesion_activa FROM usuarios WHERE ';
        const params = [];

        if (this._id !== 0) {
            sql += 'id = $1';
            params.push(id);
        } else if (this._nombres !== '') {
            sql += `nombres ILIKE '${this._nombres}%'`;
        } else if (this._email !== '') {
            sql += 'email = $1';
            params.push(this._email);
        }

        try {
            const result = await this._conn.query(sql, params);
            if (result.rows) {
                return result.rows;
            }

            return [];
        } catch (e) {
            throw e;
        }
    }

    set id(id) {
        this._id = id;
    }

    get nombres() {
        return this._nombres;
    }
 
    set nombres(nombres) {
        this._nombres = nombres;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }
}