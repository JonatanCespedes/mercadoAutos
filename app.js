const express = require('express'); //Requiero express
const app = express(); //Guardo express ejecutado en la variable app
const port = 3000 // Número de puerto


/* CONFIGURACIONES */
app.set('view engine', 'ejs') //Seteamos template engine que vamos a utilizar
app.set('views',__dirname + '/views'); //Configuro la ruta de las vistas
app.use(express.static(__dirname +'/public')); //Configuro la ruta a la carpeta public

/* REQUERIR RUTAS */
const indexRouter = require('./routes/indexRouter') //Requiero enrutador index
const autosRouter = require('./routes/autosRouter')


/* USAR RUTAS */
app.use('/', indexRouter) // Indico que cuando el cliente ingrese a http://localhost:3000/ 
app.use('/autos', autosRouter)

app.listen(port, () => console.log('Servidor corriendo en el puerto' + port))

