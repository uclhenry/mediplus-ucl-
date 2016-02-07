var mongoose = require("mongoose");

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //在这里创建你的模式和模型
		var movieSchema = new mongoose.Schema({
		title: {type: String},
		rating: String,
		releaseYear: Number,
		hasCreditCookie: Boolean
	});   

	var thor = new Movie({
		title: 'Thor',
		rating: 'PG-13',
		releaseYear: '2011',   //注意我们在这里使用一个字符串而不是一个数字 -- Mongoose会为我们自动转换     
		hasCreditCookie: true
	});    

	
});   

mongoose.connect('mongodb://localhost/nodetest1');   


thor.save(function(err,thor){
    if(err) return console.log(err);
    console.dir(thor);
});  