// Módulos
const express = require('express');
const app = express();
const path = require('path');

// Configuración de la app
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const mainRouter = require('./routes/mainRouter.js');
app.use("/", mainRouter);

app.listen( 3000, () => console.log('Servidor arriba en el puerto 3000! 👌'));