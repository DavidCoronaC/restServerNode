const express = require('express');
const cors = require('cors');

require('colors');

class server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middlewares
        this.middlewares();
        
        
        // Rutas
        this.routes();
    }

    middlewares(){

        // CORS
        this.app.use(cors());
        // Lectura & Parseo del body
        this.app.use( express.json() );
        // Directorio Público 
        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use( this.usersPath , require('./routes/user.routes'));

    }

    listener(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto: ${`${this.port}`.yellow} `)
        });
    }

}

module.exports = server;