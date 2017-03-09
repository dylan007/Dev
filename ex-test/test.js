var express = require('express')
var router = express.Router()

router.use(function timelog(req,res,next){
	console.log('Time: ' , Date.now())
	next()
})

router.get('/',function(req,res){
	res.send('Test root')
})

router.get('/about',function(req,res){
	res.send('Test about')
})

module.exports = router
