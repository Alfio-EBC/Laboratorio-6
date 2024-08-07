const express = require('express');
const path = require('path');
const cors = require('cors');
const router = require('./server/rutas/libro'); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/ruta', router);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
