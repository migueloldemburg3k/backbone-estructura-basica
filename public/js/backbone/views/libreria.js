var Libreria = Backbone.View.extend({
	el: '#app',

	initialize: function(){
		libros.on('add', this.mostrarLibro);
		libros.fetch(); 
	},

	mostrarLibro: function(modelo){
		var vista = new MostrarLibroView({model:modelo});
		$('.libros').append(vista.render().$el);
	}
});

var MostrarLibroView = Backbone.View.extend({
	template: _.template( $("#tplMostrarLibro").html() ),
	render: function(){
		this.$el.html( this.template(this.model.toJSON()) );
		return this;
	}
});

var appView = new Libreria();