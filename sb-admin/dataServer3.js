var express = require('express');
var app = express();
//Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

var array2 = [];
var array = [];
var medisysarray = [];

app.get('/api/Medisys', function(req,res){
  console.log("Medisys get");
  var MongoClient = require('mongodb').MongoClient;
  var assert = require('assert');
  var ObjectId = require('mongodb').ObjectID;
  var url = 'mongodb://localhost:27017/exampleDb';
  var findRestaurants = function(db, callback) {

     var cursor =db.collection('Medisys_Zika_aggregation').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         //console.dir(doc);
         var year = doc.year;
          var month = doc.month;
          var day = doc.day;
          var number = doc.number;
          var unitdata = {"year":year,"month":month,"day":day,"number":number};
          medisysarray.push(unitdata);console.log(medisysarray);
           //console.dir(unitdata);
      } else {
         callback();
      }
   });
res.send(medisysarray);



  };  

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findRestaurants(db, function() {
        db.close();
    });
  });
      //call your database request function here and either pass it res, or save the response as a variable.
      //then do res.send(x); where x is what you want to return
      //
});
app.get('/api/twitterinfluenza', function(req,res){
  console.log("request get");
  var MongoClient = require('mongodb').MongoClient;
  var assert = require('assert');
  var ObjectId = require('mongodb').ObjectID;
  var url = 'mongodb://localhost:27017/exampleDb';
  var readysenddata = function(db, callback) {

     var cursor =db.collection('Twitter_Influenza_aggregatation').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         //console.dir(doc);
    
           var year = doc.year;
          var month = doc.month;
          var day = doc.day;
          var number = doc.number;
          var unitdata = {"year":year,"month":month,"day":day,"number":number};
          array.push(unitdata);
          //console.log(array);
           //console.dir(unitdata);
      } else {
         callback();
      }
   });
res.send(array);



  };  

  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    readysenddata(db, function() {
        db.close();
    });
  });
      //call your database request function here and either pass it res, or save the response as a variable.
      //then do res.send(x); where x is what you want to return
      //
});
app.get('/api/mapmedisyszika', function(req,res){
	console.log("request get");
	var MongoClient = require('mongodb').MongoClient;
	var assert = require('assert');
	var ObjectId = require('mongodb').ObjectID;
	var url = 'mongodb://localhost:27017/exampleDb';
	var readysenddata = function(db, callback) {

	   var cursor =db.collection('Medisys_Zika_simplify2').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         //console.dir(doc);
    
        	 var year = doc.year;
	      	var month = doc.month;
	      	var day = doc.day;
	      	//var number = doc.number;
          var country = doc.country;
	      	var unitdata = {"year":year,"month":month,"day":day,"country":country};
	      	array2.push(unitdata);
	      	//console.log(array2);
	         //console.dir(unitdata);
      } else {
         callback();
      }
   });




	};	

	MongoClient.connect(url, function(err, db) {
	  assert.equal(null, err);
	  readysenddata(db, function() {
	      db.close();
	  });
	});res.send(array2);
      //call your database request function here and either pass it res, or save the response as a variable.
      //then do res.send(x); where x is what you want to return
      //
});

app.listen(8600);
//it will respond to port 8000 (ipaddress:8000)