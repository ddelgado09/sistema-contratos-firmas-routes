import pkg from 'pg';
import 'dotenv/config'

const { Pool } = pkg;

class ConnDb {
    static conn = undefined;

    constructor() {
        return null;
    }

    static getDbConn() {
        if (typeof ConnDb.conn === "undefined") {
            ConnDb.conn = new Pool({
                host: process.env.PGHOST,
                port: process.env.PGPORT,
                user: process.env.PGUSER,
                password: process.env.PGPASSWORD,
                database: process.env.PGDATABASE
            });
        }

        return ConnDb.conn;
    }
}

export default ConnDb;