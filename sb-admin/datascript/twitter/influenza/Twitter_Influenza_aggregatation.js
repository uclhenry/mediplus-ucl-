var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/exampleDb';

var aggregateRestaurants = function(db, callback) {
  var source = "Twitter_Influenza_simplify";
  var target = "Twitter_Influenza_aggregatation";
var targetcollection = db.collection('Twitter_Influenza_aggregatation');//
          function insertonerecord(disease,year,month,day,number,collection){
            console.log("inserting "+disease);
            var test ="fortest";
            var doctest = {
            //  country: country,
              disease: disease,
              year:year,
              month:month,
              day:day,
              number:number
              };
              collection.insert(doctest, {w:1}, function(err, result) {
         // collection.update({mykey:1}, {$set:{fieldtoupdate:2}}, {w:1}, function(err, result) {});
             });
            }

   var x = db.collection(source).aggregate(




     [{$sort : {year : -1,month :-1,day:-1}},
       { $group:

        { "_id": {
        year: "$year",month: "$month",day: "$day",
       
    }, "counter": { $sum: 1 } , idset: { $push:  "$counter" }


	} 

		}
     ]
   );
   // x.toArray(function(err, result) {
   //   assert.equal(err, null);
   //   console.log(result);
   //   callback(result);
   // });
   x.forEach(function(doc) {
	         var number = doc.counter;
	        console.log(doc.counter);//console.log(doc.idset[i]+"i"+i);
	        console.log(doc._id.year);
          console.log(doc._id.month);
          console.log(doc._id.day);
         insertonerecord("Influenza",doc._id.year,doc._id.month,doc._id.day,doc.counter,targetcollection);
	      
	   
	});



};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  aggregateRestaurants(db, function() {
      db.close();
  });
});