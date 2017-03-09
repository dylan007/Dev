var mongoose = require('mongoose');

// Genre Schema

var genreSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	create_Date:{
		type: Date,
		default: Date.now
	}
})

var Genre = module.exports = mongoose.model('Genre',genreSchema);


module.exports.getGenres = function(callback,limit){
	Genre.find(callback).limit(limit);
}

module.exports.addGenres = function(genre, callback){
	Genre.create(genre,callback);
}

module.exports.updGenres = function(id, genre, callback){
	var query = {_id: id}
	var update = {
		name: genre
	}
	Genre.findOneAndUpdate(query,update,callback)
}


module.exports.delGenres = function(id,callback){
	var query = {name: id}
	Genre.remove(query,callback);

}