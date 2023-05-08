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
const insertar = "INSERT INTO persona VALUES ('100285822', 'FREDY', 'CARVAJAL','CL 14D MANZANARES', '305745', 'jhonf199','M')"
connection.query(insertar, (err, rows) =>{
    if(err) throw err
    console.log('Datos insertados');
})

const editar = "UPDATE `baseproyecto`.`persona` SET `cedula` = '102858', `nombre` = 'Jhon Fredy', `apellidos` = 'Carvajal', `direccion` = 'Cr 81', `telefono` = '300365', `correo` = 'jhonyad', `genero` = 'M' WHERE (`cedula` = '101010')"
connection.query(editar, (err, rows) =>{
    if(err) throw err
    console.log('Datos editados');
})

// UPDATE `baseproyecto`.`persona` SET `cedula` = '', `nombre` = '', `apellidos` = '', `direccion` = '', `telefono` = '', `correo` = '', `genero` = '' WHERE (`cedula` = '100285822')
connection.query('SELECT * FROM baseproyecto.persona;',(err,rows) =>{
    if(err) throw err
    console.log('Los datos solicitados son: ')
    console.log(rows)
})


connection.end();