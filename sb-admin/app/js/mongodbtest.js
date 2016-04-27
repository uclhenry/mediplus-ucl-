//var mongoose = require('mongoose');

require(['mongoose'], function (mongoose) {
    //foo is now loaded.
});
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected");
});