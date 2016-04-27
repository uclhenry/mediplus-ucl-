//function connectMongo(){

//sart ys code
/*
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected");
});*/

//end yscode


 /* var MongoClient = require('mongodb').MongoClient;
  console.log('MongoClient is',typeof MongoClient)
  var myCollection;
  var url = 'mongodb://127.0.0.1:27017/test';
  var db = MongoClient.connect(url, function(err, db) {
    if(err){
      console.log("mongoerror", err);
      throw err;
    }
    console.log("connected to the mongoDB!");
    myCollection = db.collection('test_collection');
  });*/
//}
//connectMongo()

var express = require('express');
var app = express();

var mongodb= require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var db;

MongoClient.connect("mongodb://localhost/test", function(err, database) {
  if(err) throw err;

  db = database;

  // Start the application after the database connection is ready
  //app.listen(3000);
  console.log("Listening on port 3000");

  var collection = db.collection('newsdata');

  var result = collection.find({}, {"_id": 0, "value": 1}).toArray();

  console.log(result);



  var myResults = [];

  collection.find({}, {"_id": 0, "value": 1}, function(err, docs) {

  //  console.log(docs);
      docs.each(function(err, doc) {
        if(doc) {
          myResults.push(doc.value);
     //     console.log(doc.value);
        }
        else {
          console.log(myResults);
          //break;
          //console.log("else");
          //res.end();
        }
      });
    });
  //console.log(myResults);
});

