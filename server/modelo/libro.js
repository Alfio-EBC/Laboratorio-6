
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schLibro = new Schema({
    isbn: {type: String, Required: 'ISBN es obligatorio'},
    autor: {type: String, Required: 'Autor es obligatorio'},
    titulo: {type: String, Required: 'Titulo es obligatorio'},
    fechaEdicion:  {type: String, Required: 'fecha de edicion es obligatorio'},
    numeroPaginas:  {type: String, Required: 'numero de paginas es obligatorio'},
    cantidadEjemplares:  {type: String, Required: 'cantidad de ejemplares es obligatorio'},
    ejemplaresDisp:  {type: String, Required: 'ejemplares disponibles es obligatorio'},
    resumen:  {type: String, Required: 'resumen es obligatorio'},
    medioEjemplar:  {type: String, Required: 'medio de ejemplar es obligatorio'},
    tema:  {type: String, Required: 'tema es obligatorio'},
    ubicacionFisica:  {type: String, Required: 'ubicacion fisica es obligatorio'},
});

const Book = mongoose.model('Book', schLibro, 'biblioteca');

module.exports = Book;
