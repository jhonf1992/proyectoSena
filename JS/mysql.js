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
// const insertar = "INSERT INTO persona VALUES ('1', 'FREDY', 'CARVAJAL','CL 14D MANZANARES', '305745', 'jhonf199','M')"
// connection.query(insertar, (err, rows) =>{
//     if(err) throw err
//     console.log('Datos insertados');
// })

// const editar = "UPDATE `baseproyecto`.`persona` SET `cedula` = '5', `nombre` = 'Jhon Fredy', `apellidos` = 'Carvajal', `direccion` = 'Cr 81', `telefono` = '300365', `correo` = 'jhonyad', `genero` = 'M' WHERE (`cedula` = '1')"
// connection.query(editar, (err, rows) =>{
//     if(err) throw err
//     console.log('Datos editados');
// })

// const eliminar = "DELETE FROM `baseproyecto`.`persona` WHERE (`cedula` = '4');"
// connection.query(eliminar, (err, rows) =>{
//     if(err) throw err
//     console.log('Datos eliminados');
// })


connection.query('SELECT * FROM baseproyecto.persona;',(err,rows) =>{
    if(err) throw err
    console.log('Los datos solicitados son: ')
    console.log(rows)
})


connection.end();