module.exports = {
    development : {
        host: process.env.DEV_MYSQL_HOST,
        port: process.env.DEV_MYSQL_PORT,
        username: process.env.DEV_MYSQL_USER,
        password: process.env.DEV_MYSQL_PASSWORD,
        database: process.env.DEV_MYSQL_DBNAME,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    production : {
        HOST: process.env.MYSQL_HOST,
        PORT: process.env.MYSQL_PORT,
        USER: process.env.MYSQL_USER,
        PASSWORD: process.env.MYSQL_PASSWORD,
        DB: process.env.MYSQL_DBNAME,
        dialect: "mysql",
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
}

