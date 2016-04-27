 var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/exampleDb';
//for every record ,find the lisst
	var source = "Twitter_Zika_source";
  var target = "Twitter_Zika_simplify";
var findRestaurants = function(db, callback) {
	var collection = db.collection(target);//
					function insertonerecord(disease,year,month,day,mydate,collection){
            disease = "zika";
					//	console.log("inserting "+disease+date);
						var test ="fortest";
						var doctest = {
						//	country: country,
							disease: disease,
							year:year,
              month:month,
              day:day,
              date:mydate
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
        // console.dir(doc);
        //confirms first case of Zika virus. reported its first confirmed case
       // var title = doc.title;
		//var disease = doc.disease;
     var time = doc.created_at;
     if (time!=null) {
       var date = new Date(time);
    //var country = doc.country;
    // var olddate =doc.date;
    // date = new Date(olddate);
    //var description = doc.description;
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var mydate = new Date(year,month,day);
      if(month<10){month = "0"+month.toString();}
      if(day<10){day = "0"+day.toString();}
        var sddate = year+"-"+month+"-"+day;

     console.log("date is "+doc.created_at);
     console.log("sddate is "+sddate);
      
     insertonerecord("Zika",year,month,day,sddate,collection);
     }
        

  
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