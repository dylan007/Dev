var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var path = require('path');

var app = express();
// var githubhook = require('githubhook');
// var github = githubhook({
// 	host: "127.0.0.1",
// 	port : "4567",
// 	path : "/payload",
// 	secret : "blah"
// });

// github.listen();
// github.on('*', function(event, repo , ref, data){
// 	var repoName = data.repository.full_name;
// 	console.log(repoName);
// });

// var http = require('http');
// var https = require('https');
var request = require('request');

// request.get('https://www.google.com', function(error, response,body){
// 	console.log(error);
// });


function list_repo(callback){
	var t = new String;
	request.get({
		uri : 'https://api.github.com/repos/dylan007/Coding/contents/Codeforces/110a.c',
		headers: {'User-agent' : 'Mozilla/5.0 (Windows NT 6.1l WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.110 Safari/537.36'},
		method : 'GET'
		},	
		function(error, repsonse, body){
			if(error){
				console.log(error);
			}
			else{
					var content = JSON.parse(body)['content'];
					var b64string = content;	
					var buf = new Buffer(b64string, 'base64').toString('ascii');
					// callback(buf);
					
				}
		}
	);	
	//return t;
};


// mongoose.connect('mongodb://localhost/bookstore')
// var db = mongoose.connection
// Genre = require('./models/genre.js')
// books = require('./models/books.js')


// app.use(bodyParser.json())

 app.get('/',function(req,res){
	// res.send('Hello World!')
	var content = list_repo(function(data){
		console.log(data);
	})
})

// app.get('/genres', function(req, res){
// 	console.log(req);
// 	res.json(req.params);
// 	// Genre.getGenres(function(err, genres){
// 	// 	if(err){
// 	// 		throw err;
// 	// 	}
// 	// 	res.json(genres);
// 	// })
// })

// app.post('/genres', function(req, res){
	
// 	// var genre = req.body;
// 	console.log(req);
// 	res.json(req.body);

// 	// Genre.addGenres(genre, function(err, genre){
// 	// 	if(err){
// 	// 		throw err;
// 	// 	}
// 	// 	res.json(genre);
// 	// })
// })

// app.put('/genres',function(req,res){
// 	var id = req.body.id
// 	var genre = req.body.name
// 	Genre.updGenres(id,genre, function(err, genre){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	})
// })

// app.post('/delgenres',function(req,res){
// 	// var id = req.body.title;
// 	console.log(req.body);
// 	// res.json(req.body);
// 	// Genre.delGenres(req.body.name,function(err,book){
// 	// 	if(err){
// 	// 		throw err;
// 	// 	}
// 	// 	res.json(book);
// 	// });
// });


// app.get('/books',function(req,res){
// 	books.getBooks(function(err,book){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	})
// })

// app.post('/books',function(req,res){
// 	var book = req.body;
// 	books.addBooks(book, function(err,book){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	})	
// })

// app.get('/books/:_id',function(req,res){
// 	books.getBooksById(req.params._id, function(err,book){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	})
// })

// app.put('/books',function(req,res){
// 	var id = req.body.id
// 	var book = req.body.book 
// 	books.updBooks(id,book,function(err,book){
// 		if (err) {
// 			throw err;
// 		}
// 		res.json(book)
// 	})
// })

// app.delete('/books',function(req,res){
// 	var id = req.body.title
// 	console.log(id);
// 	books.delBooks(id,function(err,book){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(book);
// 	})
// })

app.listen(3000);
console.log("We're up!")
