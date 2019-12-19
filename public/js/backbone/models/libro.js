var Libro = Backbone.Model.extend({

	initialize: function(){

		console.log('Se ha creado un nuevo objeto');

		this.on('change', function(){
			console.log('El modelo ha cambiado')
		});
	},
	validate: function(atributos){
		//Validate model attributes on save()
		if(!atributos.titulo){
			return "Debe tener un titulo.";
		}

		if(!atributos.autor){
			return "Debe tener un autor.";
		}
	},
	//RESTful API
	urlRoot: '/libros', 
	// Default Attributes
	defaults: { 
		titulo: '',
		autor: '',
		categoria: 'Drama'
	}
});



/****************************************************************

//Create a New Object
var libroUno = new Libro({
	titulo: 'Hamlet',
	autor: 'William Shakespeare',
	categoria: 'Tragedia'
});

console.log( libroUno.toJSON() );

//Fetch a Record From Server - GET /libro/1
var libroDos = new Libro({ id: '1' });
libroDos.fetch();

setTimeout(function(){
	console.log( libroDos.toJSON() );
}, 1000);

//Create an Object and Save to Server - POST /libros
var libroTres = new Libro({
	titulo: '100 Años De Soledad',
	autor: 'Gabriel Garcia Oldemburg',
	categoria: 'Novela'
});

libroTres.save();

setTimeout(function(){

	console.log( libroTres.toJSON() );

	//Edit an Object and Save to Server - PUT /libros/1
	libroTres.set({autor: 'Gabriel Garcia Márquez'});

	libroTres.save();

	setTimeout(function(){
		console.log( libroTres.toJSON() );

		//Delete an Object -  DELETE /libros/1
		libroUno.destroy();
	}, 1000);

}, 1000);

**********************************************************************/