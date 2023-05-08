const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'baseproyecto'
})

connection.connect((err)=>{
    if(err) throw err
    console.log('Conectado a BS');
})

connection.end();