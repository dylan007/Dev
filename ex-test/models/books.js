var mongoose = require('mongoose');

// Genre Schema

var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required : true
	},
	genre:{
		type: String,
		required: true
	},
	desc:{
		type: String
	},
	author:{
		type: String
	},
	publisher:{
		type: String
	}	
	
})

var books = module.exports = mongoose.model('books',bookSchema);


module.exports.getBooks = function(callback,limit){
	books.find(callback).limit(limit);
}

module.exports.getBooksById = function(id, callback){
	books.findById(id,callback)
}

module.exports.addBooks = function(book, callback){
	books.create(book,callback)
}

module.exports.updBooks = function(id, book, callback){
	var query = {_id: id}
	var update = {
		title : book.title,
		genre : book.genre,
		desc : book.desc,
		author : book.author
	}
	books.findOneAndUpdate(query,update,callback)
}

module.exports.delBooks = function(id, callback){
	console.log(this.id);
	var query = {title: id}
	books.remove(query, callback)
}
