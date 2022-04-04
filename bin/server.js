// configuracion del servidor
const http = require('http');
const app = require('../app')

//configuración .env
require('dotenv').config();

//creacion servidor
const server = http.createServer(app); // le pasamos una función que se ejecuta siempre que se llegue al servidor. Le pasamos la propia app de express para que sea la app la que gestione las ruta. Para eso lo importamos y lo invocamos


//ponemos a escuchar
let PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log('servidor escuchando en puerto: ' + PORT)
})