var mysql = require('mysql');

var connMySQL = function() {
    console.log('Conexão com bd foi feita');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portal_noticias'
    });
}

module.exports = function() {
    console.log('Conexao com bd foi feita autoload');
    return connMySQL;
}