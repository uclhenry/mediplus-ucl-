 var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/exampleDb';
//for every record ,find the lisst
	var source = "Medisys_Zika_source";
  var target = "Medisys_Zika_simplify2";
var findRestaurants = function(db, callback) {
	var collection = db.collection(target);//
					function insertonerecord(disease,year,month,day,mydate,country,collection){
            disease = "Zika";
					//	console.log("inserting "+disease+date);
						var test ="fortest";
						var doctest = {
						//	country: country,
							disease: disease,
							year:year,
              month:month,
              day:day,
              date:mydate,
              country:country
							};
							collection.insert(doctest, {w:1}, function(err, result) {
		     // collection.update({mykey:1}, {$set:{fieldtoupdate:2}}, {w:1}, function(err, result) {});
						 });

						}
   var cursor =db.collection(source).find().sort( { date: -1 } );//one list of same value{"date":"January 27, 2016"}{"date":"January 22, 2016"}
   //each delete unless the first one 
   //array
   cursor.each(function(err, doc) {

      assert.equal(err, null);

      if (doc != null) {
        var country = doc.country;
        var disease = doc.disease;
    //var country = doc.country;
    var olddate =doc.date;
    date = new Date(olddate);
     // var time = doc.created_at;
     // if (time!=null) {
     //   var date = new Date(time);
    //var country = doc.country;
    // var olddate =doc.date;
    // date = new Date(olddate);
    //var description = doc.description;
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var month2 = month;
      var day = date.getDate();
      var mydate = new Date(year,month,day);
      if(month<10){month = "0"+month.toString();}
      if(day<10){day = "0"+day.toString();}
        var sddate = year+"-"+month+"-"+day;

    // console.log("date is "+doc.created_at);
     console.log("sddate is "+sddate);
      
     insertonerecord("Zika",year,month2,day,sddate,country,collection);
     
        

  
      } else {
         callback();
      }
   });


};

   



MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  findRestaurants(db, function() {
      db.close();
  });
});