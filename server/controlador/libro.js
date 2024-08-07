    const express = require('express');
    const app = express();
    const router = require('../rutas/libro');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/ruta', router);

    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
