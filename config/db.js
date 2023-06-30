const dotenv = require('dotenv');
dotenv.config({ path: '.env' })


const config = {
    user: process.env.BD_USER, // sql user
    password: process.env.BD_PASS, //sql user password
    server: process.env.BD_HOST, // if it does not work try- localhost
    database: process.env.BD_NAME,
    options: {
        trustServerCertificate: true,
        encrypt: false, //true for azure
    },
    port: process.env.BD_PORT
}

module.exports = config;
