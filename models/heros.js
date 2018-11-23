var express = require('express');
//var JSONData = require('./heros.json');
var fs = require("fs");

const mongoose = require('mongoose');

let Contact= {}
//var urlstring=mongoose.connect('mongodb://127.0.0.1:27017/myDb');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Contactdb = new Schema({
	id: ObjectId,
  name: String,
  phoneNo: String
});

const ContactModel = mongoose.model('contact',Contactdb);

Contact.getAll = function(){
	return new Promise(function(resolve,reject){ 
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDb');
		console.log(connection);
		ContactModel.find({},function(err,contact){
			if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				
				console.log(contact);

				resolve(contact);
			}
});
		});

}

Contact.saveData = function(newHeroData){
	return new Promise(function(resolve,reject){ 
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDb');
		console.log(connection);

		var newUser = ContactModel({
  				name:`${newHeroData.name}`,
  				phoneNo:`${newHeroData.phoneNo}`
			});

			newUser.save({},function(err,contact){
			if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				
				console.log(contact);

				resolve(contact);
			}
		});
		
		});

}

Contact.deleteAll = function(newData){
	return new Promise(function(resolve,reject){ 
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDb');
		console.log(connection);

	var deleteUser = ContactModel({
  			_id:`${newData._id}`
  				
			});


			newUser.remove({},function(err,contact){
			if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				
				console.log(contact);

				resolve(contact);
			}
		});
		
		});

}

module.exports = Contact;
























/*Heros.getAll = function(){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query='select * from Comic where is_valid=1';
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}



Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});
  		let query=`insert into Comic(Superhero,publisher,alter_ego,first_app,characters,is_valid,update_time) values('${newHeroData.superhero}','${newHeroData.publishr}','${newHeroData.alterego}','${newHeroData.firstapp}','${newHeroData.charactr}',1,'${new Date()}')`;
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
    }
    Heros.deleteAll = function(deleteHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query=`update Comic set is_valid=0 where id= ${deleteHeroData.id}`;
	console.log(query);
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}


    Heros.ViewAll = function(deleteHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});

	let query=`select * from Comic where id= '${deleteHeroData.id}'`;
	
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
}

Heros.updateAll = function(newHeroData){
	return new Promise(function(resolve,reject){ 
  		const connection = mysql.createConnection({
 	 	host: 'localhost',
 	 	user: 'root',
  		database: 'heroes',password:'ccs#1234'
   
	});
  		let query=`update Comic set Superhero='${newHeroData.superhero}',publisher='${newHeroData.publishr}',alter_ego='${newHeroData.alterego}',first_app='${newHeroData.firstapp}',characters='${newHeroData.charactr}',is_valid=1,update_time='${new Date()}' where id= '${newHeroData.id}'`;
	console.log(query);
	connection.query(query,function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR:: fetching data from database.');
			reject();
		}
		else{
		//console.log(result);
		//console.log(fields);
		resolve(result);
		}

	});
	
	});
    }*/
