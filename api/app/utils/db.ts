import consola, { Consola } from "consola";
import { PoolOptions, Connection, createConnection, RowDataPacket, OkPacket, ResultSetHeader, FieldPacket, QueryError, Query } from "mysql2";

const DEFAULT_TIDB_SERVER_PORT = '4000';

export function getConnectionOptions(options?: PoolOptions) {
    if (process.env.DATABASE_URL === undefined || process.env.DATABASE_URL.length === 0) {
        consola.error('Must provide DATABASE_URL in the env variable.');
        process.exit();
    }

    const url = new URL(process.env.DATABASE_URL);
    const dbHost = url.hostname;
    const dbName = url.pathname.replaceAll('/', '');
    const dbPort = parseInt(url.port || DEFAULT_TIDB_SERVER_PORT);
    const dbUser = url.username;
    const dbPass = url.password;
    const defaultOptions = {
        host: dbHost,
        port: dbPort,
        database: dbName,
        user: dbUser,
        password: dbPass,
        decimalNumbers: true,
        timezone: 'Z'
    };    
    return Object.assign(defaultOptions, options);
}

export interface QueryResponse<T> {
    result: T;
    fields: FieldPacket[];
}

export class ConnectionWrapper {
    public conn: Connection;
    private log: Consola;

    constructor(options: PoolOptions) {
        this.log = consola.withTag('db-conn');
        this.conn = createConnection(options);
        this.conn.on('error', (err: any) => {
            if (!err.fatal) return;
            if (err.code !== 'PROTOCOL_CONNECTION_LOST') throw err;

            this.log.warn(`Database server connection lost, trying to reconnect.`);
            const newConn = createConnection(this.conn.config);
            newConn.connect();
            this.conn = newConn;
        });
    }

    query<T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader>(
        sql: string,
        values: any | any[] | { [param: string]: any }
    ): Promise<QueryResponse<T>> {
        return new Promise((resolve, reject) => {
            this.conn.query<T>(sql, values, (err: QueryError | null, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        result, fields
                    });
                }
            });
        });
    }
    
    execute<T extends RowDataPacket[][] | RowDataPacket[] | OkPacket | OkPacket[] | ResultSetHeader>(
        sql: string,
    ): Promise<QueryResponse<T>> {
        return new Promise((resolve, reject) => {
            this.conn.execute<T>(sql, (err: QueryError | null, result, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({
                        result, fields
                    });
                }
            });
        });
    }

}