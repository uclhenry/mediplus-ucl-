var mongoose = require("mongoose");

var db = mongoose.connection;    

db.on('error',console.error);
db.once('open',function(){
    //�����ﴴ�����ģʽ��ģ��
		var movieSchema = new mongoose.Schema({
		title: {type: String},
		rating: String,
		releaseYear: Number,
		hasCreditCookie: Boolean
	});   

	var thor = new Movie({
		title: 'Thor',
		rating: 'PG-13',
		releaseYear: '2011',   //ע������������ʹ��һ���ַ���������һ������ -- Mongoose��Ϊ�����Զ�ת��     
		hasCreditCookie: true
	});    

	
});   

mongoose.connect('mongodb://localhost/nodetest1');   


thor.save(function(err,thor){
    if(err) return console.log(err);
    console.dir(thor);
});  