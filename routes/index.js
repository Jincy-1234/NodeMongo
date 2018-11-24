var express = require('express');
var router = express.Router();
var Contact=require('../models/heros.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'HERO HUNTERS'});
});



router.get('/getAllHeros', function(req, res, next) {
	Contact.getAll()
	.then(function(retVal){
 		res.render('contactlist',{data:retVal})
	})
	.catch(console.log('ERR::in resolving the promise'))
});




router.get('/saveData', function(req, res, next) {
	Contact.saveData(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/deleteData', function(req, res, next) {
	Contact.deleteAll(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/UpdateData', function(req, res, next) {

	Contact.updateAll(req.query)
	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});


router.get('/update', function(req, res, next) {
	Contact.getSingle(req.query)
	.then(function(retVal){
 		res.render('updatecontact',{data:retVal})
	})
	.catch(console.log('ERR::in resolving the promise'))
});


//REST API
/*

router.get('/getAllvalues', function(req, res, next) {
	Contact.getAll()
	.then(function(retVal){
 		res.send(retVal)
	})
	.catch(console.log('ERR::in resolving the promise'))
});
*/




module.exports = router;