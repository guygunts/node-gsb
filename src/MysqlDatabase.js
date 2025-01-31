const createPool = require("mysql");
const util = require('util');
const pathdev = require('dotenv').config({ path: './config/dev.env' });
const mysqldb = createPool.createPool({
    connectionLimit: 10, // default:10
    host: pathdev.parsed.mysql_host,
    user: pathdev.parsed.mysql_user,
    password: pathdev.parsed.mysql_password,
    database: pathdev.parsed.database,
    multipleStatements: true
    /* connectionLimit : 10, // default:10
     host     : "10.10.10.101",
     user     : "dgachat",
     password : "Forum#1188",
     database : "dgachat",
     multipleStatements: true*/
})

function reconnect() {
    mysqldb.getConnection(function (err,con) {
        if (err) {
            console.log('error when connecting to db:', err);
            mysqldb.end();
            setTimeout(reconnect, 2000);
        }
        if(con){
            console.log(con)
            con.release();
        }
    });

    mysqldb.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('Database connection was closed.')
            reconnect();
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
            reconnect();
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
            reconnect();
        }

    });
}
reconnect();

 mysqldb.query = util.promisify(mysqldb.query)
module.exports = mysqldb