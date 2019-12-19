var LibrosCollection = Backbone.Collection.extend({
	model: Libro,
	url: '/libros'
});

//Create a Book Collection
var libros = new LibrosCollection();


/******************************************************************************************

//Listen to EVENTS
libros.on('add', function(model){
	console.log("Se agrego un nuevo modelo a la coleccion." + JSON.stringify(model))
});

libros.on('change', function(model){
	console.log("Se ha cambiado un modelo." + JSON.stringify(model))
});


//Adding Models to Collections
var libroA = new Libro({
	titulo: 'Rojo y Negro',
	autor: 'Stendhal',
	categoria: 'Desconocido',
	id: 1
});

var libroB = new Libro({
	titulo: 'El Buscon',
	autor: 'Francisco de Quevedo',
	categoria: 'Desconocido',
	id: 2
});

var libroC = new Libro({
	titulo: 'Dracula',
	autor: 'Bran Stoker',
	categoria: 'Desconocido',
	id: 3
});

//Add Books to Collection
libros.add([libroA, libroB, libroC]);

console.log("Collection: add([a, b, c]) ");
console.log( libros.toJSON() );

//Remove Book from Collection
libros.remove([libroC]);

console.log("Collection: remove([c])");
console.log( libros.toJSON() );

//Get Model From Collection by ID
var libroReturned = libros.get(1); //get model by ID

console.log("Collection: get()");
console.log( libroReturned.toJSON() );

//Reset Books From Collection
libros.reset();

console.log("Collection: reset()");
console.log( libros.toJSON() );

*******************************************************************************************************/