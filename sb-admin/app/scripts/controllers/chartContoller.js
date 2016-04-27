'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
//array ready for record data
 function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
 var flag =0;
var linezikaArray;
	   linezikaArray = new Array(20);
	  for (var i = 0; i < linezikaArray.length; i++) {
	  	linezikaArray[i]=new Array(12);
	  	for (var j = 0; j < linezikaArray[i].length; j++) {
	  		var number = daysInMonth(j+1,2000+i);
	  	linezikaArray[i][j]=new Array(number);
	    }

	  }
	  for (var i = 0; i < linezikaArray.length; i++) {
	  	for (var j = 0; j < linezikaArray[i].length; j++) {
	  		for (var k = 0; k < linezikaArray[i][j].length; k++) {
	  		linezikaArray[i][j][k]=0;
	  	    }
	  	}
	  } 

var twitterinflluenzaArray;
	   twitterinflluenzaArray = new Array(20);
	  for (var i = 0; i < twitterinflluenzaArray.length; i++) {
	  	twitterinflluenzaArray[i]=new Array(12);
	  	for (var j = 0; j < twitterinflluenzaArray[i].length; j++) {
	  		var number = daysInMonth(j+1,2000+i);
	  	twitterinflluenzaArray[i][j]=new Array(number);
	    }

	  }
	  for (var i = 0; i < twitterinflluenzaArray.length; i++) {
	  	for (var j = 0; j < twitterinflluenzaArray[i].length; j++) {
	  		for (var k = 0; k < twitterinflluenzaArray[i][j].length; k++) {
	  		twitterinflluenzaArray[i][j][k]=0;
	  	    }
	  	}
	  } 
var twitterZikaArray;
	   twitterZikaArray = new Array(20);
	  for (var i = 0; i < twitterZikaArray.length; i++) {
	  	twitterZikaArray[i]=new Array(12);
	  	for (var j = 0; j < twitterZikaArray[i].length; j++) {
	  		var number = daysInMonth(j+1,2000+i);
	  	twitterZikaArray[i][j]=new Array(number);
	    }

	  }
	  for (var i = 0; i < twitterZikaArray.length; i++) {
	  	for (var j = 0; j < twitterZikaArray[i].length; j++) {
	  		for (var k = 0; k < twitterZikaArray[i][j].length; k++) {
	  		twitterZikaArray[i][j][k]=0;
	  	    }
	  	}
	  } 

var medisysInfluenzaArray;
	   medisysInfluenzaArray = new Array(20);
	  for (var i = 0; i < medisysInfluenzaArray.length; i++) {
	  	medisysInfluenzaArray[i]=new Array(12);
	  	for (var j = 0; j < medisysInfluenzaArray[i].length; j++) {
	  		var number = daysInMonth(j+1,2000+i);
	  	medisysInfluenzaArray[i][j]=new Array(number);
	    }

	  }
	  for (var i = 0; i < medisysInfluenzaArray.length; i++) {
	  	for (var j = 0; j < medisysInfluenzaArray[i].length; j++) {
	  		for (var k = 0; k < medisysInfluenzaArray[i][j].length; k++) {
	  		medisysInfluenzaArray[i][j][k]=0;
	  	    }
	  	}
	  } 
 var $http = angular.injector(['ng']).get('$http');
$http.get("http://localhost:8600/api/Medisys")//http://127.0.0.1:28017/exampleDb/linechartZika/?"
                .success(function (response) {
                    //data here in response object
                  var dataset = response;//.rows;
                    //var rowslength = response.total_rows;
                    var rowslength = response.length;
                    for (var i = 0; i < rowslength; i++) {
                    	var year = dataset[i].year;
                    	var month =dataset[i].month;
                    	var day = dataset[i].day;
                    	var number = dataset[i].number;
                    	linezikaArray[year-2000][month-1][day-1]= number;
                    }
                   // console.log(response.total_rows);
                    //console.log(linezikaArray);
                })
                .error(function(err, status) {
                    defer.reject(err);
                })
$http.get("http://localhost:8600/api/twitterinfluenza")//http://127.0.0.1:28017/exampleDb/linechartZika/?"
                .success(function (response) {
                	console.log("get the response twitterinfluenza");
                    //data here in response object
                  var dataset = response;//.rows;
                    //var rowslength = response.total_rows;
                    var rowslength = response.length;
                    for (var i = 0; i < rowslength; i++) {
                    	var year = dataset[i].year;
                    	var month =dataset[i].month;
                    	var day = dataset[i].day;
                    	var number = dataset[i].number;
                    	twitterinflluenzaArray[year-2000][month-1][day-1]= number;
                    }
                   // console.log(response.total_rows);
                   // console.log(twitterinflluenzaArray);
                })
                .error(function(err, status) {
                    defer.reject(err);
                })

var startDateRange = 1443657600;
var endDateRange = 1446335999;


function isInTimelineRange(timestamp){
  if(startDateRange <= timestamp && timestamp <= endDateRange){
    return true;
  }else{
    return false;
  }
}

var sbAdminApp = angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {


/*
function displayloadedvalues(){

  $scope.twitterline.data[0][0] = 1;
}*/

function displayTopUsers(param){

        var $http = angular.injector(['ng']).get('$http');
                
                if (param != "") {
                    param+= "/Jul/2015";
                }


                var defer = $q.defer();



                $http.get("../api/topusers/"+param)
                .success(function (response) {
                    

                    defer.resolve(response);
                    //console.log(response.data);
                    //$scope.rows = response.data;
                    //alert("past");
                })
                .error(function(err, status) {
                    defer.reject(err);
                })

                $scope.promise = defer.promise;
                $scope.promise.then(
                    function(v){return v},
                    function(err){return err}
                    )
                .then(

                    function(v){$scope.rows = v},
                    function(err){$scope.rows = err}

                    )

}
var twittergraphvalues = 1;
var twitterdataarray = [];


/*window.setInterval(function(){
  /// call your function here
  console.log('interval');
    //$scope.labels.push('');
    //$scope.data[0].push(9);
    $scope.twitterline.data[0][0] = Math.round(Math.random() * 1000);
}, 5000);*/





function loadTwitterGraphValues(){
  $scope.twitterline = {
      labels: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
      series: ['Twitter'],
      data: [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      ],
      onClick: function (points, evt) {
        console.log(points, evt);
        console.log(twittergraphvalues);
          var selectedPoint = points[0]['label'];


          //add table refresh/update here.....

          //////////////////loadTable(JSON.stringify(points[0]['label']));
          //$scope.rows = [];

          //$http.get("http://localhost:3000/api/topusers/07/07/2015").success(funtion (response) {
        //});


            //$scope.rows = [];
            //$scope.rows.push('response');

            displayTopUsers(selectedPoint);

                
                //console.log(defer.promise);
                //$scope.rows = defer.promise.data;

            

          }

          


          //$scope.counter = 3;

          //$scope.addRow = function() {

            //////////////////////////////////$scope.rows.push('Testing');
            //$scope.counter++;

          //}


                    //angular.element(document.getElementById('lineTable-v')).append($compile("<table><tr><td>RandomUser</td><td>939</td></tr></table>")(scope));




      
    };
    //////



    



    //////
  /*var $http = angular.injector(['ng']).get('$http');
                
                var month = "Jul";
                var days = ['07','06','06','06','06','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];

                //var day = "10";

                return $q.all(
                for (var dayVal in days){
                  var day = days[dayVal];
                  console.log("day: "+dayVal);
                  var defer = $q.defer();



                  $http.get("../api/twittercount/"+day+"/"+month)
                  .success(function (response) {
                      
                      $scope.twitterline.data[0][Number(response._id)-1] = response.count;
                      defer.resolve(response);
                      //console.log(response);
                      //$scope.rows = response.data;
                      //alert("past");
                  })
                  .error(function(err, status) {
                      defer.reject(err);
                  })
                }).then(

                  //$scope.promise = defer.promise;
                  //$scope.promise.all.then(

                      function(){
                        //twittergraphvalues =  10;
                            //var result = v;
                            //twitterdataarray.push(result);


                            console.log(JSON.stringify(result));

                            
                            //console.log($scope.twitterline);
                            //$digest();

                        

                        
                        //console.log(twittergraphvalues);
                      }//,
                      //function(err){}

                      );*/



                //}
                

}

function getSearchData() {
    var $http = angular.injector(['ng']).get('$http');

    return {
        // returns a promise for an object like:
        // { abo: resultFromAbo, ser: resultFromSer, ... }
        loadDataFromUrls: function () {
            var month = "Jul";
            var days = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];


            return $q.all(days.map(function (day) {
                return $http({
                    method: 'GET',
                    url: '../api/twittercount/' + day + '/' + month
                });
            }))
            .then(function (results) {
                var resultObj = {};
                results.forEach(function (val, i) {
                    resultObj[days[i]] = val.data;
                });
                console.log(resultObj);
                for (var obj in resultObj){
                  if(resultObj[obj]._id){
                    $scope.twitterline.data[0][Number(resultObj[obj]._id)-1] = resultObj[obj].count;
                  }

                }

                return resultObj;        
            });
        }
    };
};


$scope.init = function () {
    // do something on loaded
    //console.log(getSearchData()());
      loadTwitterGraphValues();

    var getSearchDataout = getSearchData().loadDataFromUrls; 
    console.log(getSearchDataout());
    displayTopUsers("");

    
  };
//displayTopUsers("");


/*

{ "_id" : "VeronicaNadan", "count" : 2735 }
{ "_id" : "RockNHot1", "count" : 1741 }
{ "_id" : "HoneyBadger253", "count" : 1622 }
{ "_id" : "itsmepanda1", "count" : 1232 }
{ "_id" : "TannersDad", "count" : 960 }
{ "_id" : "itsbaxter", "count" : 915 }
{ "_id" : "NOWinAutism", "count" : 840 }
{ "_id" : "aspiesmom", "count" : 767 }
{ "_id" : "chavaray", "count" : 681 }
{ "_id" : "doritmi", "count" : 618 }

*/
/*var executed = false;
angular.element(document).ready(function () {
            if (!executed){
                var $http = angular.injector(['ng']).get('$http');
                
                


                var defer = $q.defer();



                $http.get("../api/topusers/")
                .success(function (response) {
                    

                    defer.resolve(response);
                    //console.log(response.data);
                    //$scope.rows = response.data;
                    //alert("past");
                })
                .error(function(err, status) {
                    defer.reject(err);
                })

                $scope.promise = defer.promise;
                $scope.promise.then(
                    function(v){return v},
                    function(err){return err}
                    )
                .then(

                    function(v){$scope.rows = v},
                    function(err){$scope.rows = err}

                    )
                executed = true;
            }


    });*/
    
    

    


    // Update the dataset at 25FPS for a smoothly-animating chart
    
        //$scope.twitterline.data[0][0] = twitterdataarray[0];



    $scope.newsline = {
        labels: ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
        series: ['News'],
        data: [
          [50,22,27,87,59,73,75,48,30,41,59,53,47,179,92,35,61]
        ],
        onClick: function (points, evt) {
          console.log(points, evt);
          var selectedPoint = points[0]['label'];


          //add table refresh/update here.....

          //////////////////loadTable(JSON.stringify(points[0]['label']));
          //$scope.rows = [];

          //$http.get("http://localhost:3000/api/topusers/07/07/2015").success(funtion (response) {
        //});


            //$scope.rows = [];
            //$scope.rows.push('response');

            //displayTopUsers(selectedPoint);

                
                //console.log(defer.promise);
                //$scope.rows = defer.promise.data;

            

          }

          


          //$scope.counter = 3;

          //$scope.addRow = function() {

            //////////////////////////////////$scope.rows.push('Testing');
            //$scope.counter++;

          //}


                    //angular.element(document.getElementById('lineTable-v')).append($compile("<table><tr><td>RandomUser</td><td>939</td></tr></table>")(scope));




        
    };

    $scope.bothline = {
        labels: ['07','08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
        series: ['News'],
        data: [
          [9933,6802,6290,6279,2026,0,0,0,0,197,3780,2975,2772,2985,4228,3252,3331,3712,2148,2225,3324,3952,2479],
          [50,22,27,87,59,73,75,48,30,41,59,53,47,179,92,35,61]
        ],
        onClick: function (points, evt) {
          console.log(points, evt);
          var selectedPoint = points[0]['label'];


          //add table refresh/update here.....

          //////////////////loadTable(JSON.stringify(points[0]['label']));
          //$scope.rows = [];

          //$http.get("http://localhost:3000/api/topusers/07/07/2015").success(funtion (response) {
        //});


            //$scope.rows = [];
            //$scope.rows.push('response');

            displayTopUsers(selectedPoint);

                
                //console.log(defer.promise);
                //$scope.rows = defer.promise.data;

            

          }

          //$scope.counter = 3;

          //$scope.addRow = function() {

            //////////////////////////////////$scope.rows.push('Testing');
            //$scope.counter++;

          //}


                    //angular.element(document.getElementById('lineTable-v')).append($compile("<table><tr><td>RandomUser</td><td>939</td></tr></table>")(scope));
   
    };

//var newslinedataset;

/*
var myMongoData;

document.getElementById("testdata").addEventListener("click", function myFunction(){
  var $http = angular.injector(['ng']).get('$http');
  $http.get("http://localhost:3000/api/test").success(function (response) {
                      //defer.resolve(response);
                      //console.log(response);
                      //$scope.rows = response.data;
                      //alert("past");
                      myMongoData = response;
                      console.log(JSON.stringify(myMongoData));
                     // console.log(JSON.stringify(response) + "CCTL");
                      //console.log(JSON.stringify(response));
                      //console.log(response[0]);
                  });
});
*/







var twitterLineData =  [
{ "label": "May 15", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Jun 15", "data": 6822, "quakePoints": [[53.249595, -0.637693,574]]},
{ "label": "Jul 15", "data": 25737,"quakePoints": [[53.901294, -2.104019,2533]]},
{ "label": "Aug 15", "data": 15424,"quakePoints": [[55.125738, -1.898219,1575]]},
{ "label": "Sep 15", "data": 22334,"quakePoints": [[55.936173, -3.433145,3000]]},
{ "label": "Oct 15", "data": 51680,"quakePoints": [[51.536117, -0.122885,2138], [51.536117, -0.122885,2643]]},
{ "label": "Nov 15", "data": 27937,"quakePoints": [[51.190784, -1.992544,2536], [50.715424, -3.621795,2314]]},
{ "label": "Dec 15", "data": 7823,"quakePoints": [[53.508247, -2.735988,864]]},
{ "label": "Jan 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Feb 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]}
]

//console.log(copy_twi);
var copy_twi =  [
{ "label": "May 15", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Jun 15", "data": 6822, "quakePoints": [[53.249595, -0.637693,574]]},
{ "label": "Jul 15", "data": 25737,"quakePoints": [[53.901294, -2.104019,2533]]},
{ "label": "Aug 15", "data": 15424,"quakePoints": [[55.125738, -1.898219,1575]]},
{ "label": "Sep 15", "data": 22334,"quakePoints": [[55.936173, -3.433145,3000]]},
{ "label": "Oct 15", "data": 51680,"quakePoints": [[51.536117, -0.122885,2138], [51.536117, -0.122885,2643]]},
{ "label": "Nov 15", "data": 27937,"quakePoints": [[51.190784, -1.992544,2536], [50.715424, -3.621795,2314]]},
{ "label": "Dec 15", "data": 7823,"quakePoints": [[53.508247, -2.735988,864]]},
{ "label": "Jan 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Feb 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]}
]
var newsLineData =  [
{ "label": "May 15", "data": 7354*2,},
{ "label": "Jun 15", "data": 8559*2,},
{ "label": "Jul 15", "data": 6991*2,},
{ "label": "Aug 15", "data": 9249*2,},
{ "label": "Sep 15", "data": 7167*2,},
{ "label": "Oct 15", "data": 8764*2,},
{ "label": "Nov 15", "data": 8230*2,},
{ "label": "Dec 15", "data": 2731*2,},
{ "label": "Jan 16", "data": 2731*2,},
{ "label": "Feb 16", "data": 2731*2,}
]
var copy_med = [
{ "label": "May 15", "data": 7354*2,},
{ "label": "Jun 15", "data": 8559*2,},
{ "label": "Jul 15", "data": 6991*2,},
{ "label": "Aug 15", "data": 9249*2,},
{ "label": "Sep 15", "data": 7167*2,},
{ "label": "Oct 15", "data": 8764*2,},
{ "label": "Nov 15", "data": 8230*2,},
{ "label": "Dec 15", "data": 2731*2,},
{ "label": "Jan 16", "data": 2731*2,},
{ "label": "Feb 16", "data": 2731*2,}
]
//var newsLineData =  [];
function getlabel(month,day){
	return getMS(month)+" 15";//+day.toString();
	//return getMS(month)+" "+day.toString();
}
setTimeout(function(){console.log("Medisys"+linezikaArray[2015-2000][12-1][4]);}, 3000);

function getdailydata(year,month,day){
	var exampledata = { "label": "Dec 09", "data": 110,};
	exampledata.label = getlabel(month,day);
	exampledata.data =linezikaArray[year-2000][month-1][day-1];;//getdata(year,month,day);
	return exampledata;
}
function getmonthtotal(year,month,array){
	var monthlytotal = 0;
	
			
			for (var k = 0; k < array[year-2000][month-1].length; k++) {
				var daydata =array[year-2000][month-1][k];
				monthlytotal = monthlytotal+daydata;
			}
	return monthlytotal;	
	
}
// for (var i = 0; i < linezikaArray.length; i++) {
// 	if(i==15)
// 	for (var j = 0; j < linezikaArray[i].length; j++) {
// 	for (var k = 0; k < linezikaArray[i][j].length; k++) {
// 	var line =getdailydata(i+2000,j+1,k);
// 	newsLineData.push(line);
// }
// }
// }

// 			setTimeout(function(){ 
// 				alert("Hello"); console.log('2 yuefen is  '+monthlytotal);
// console.log('15 11 3  '+array[15][11][3]);
// console.log('11 '+getmonthtotal(2016,1,linezikaArray));
// 			}, 3000);
function loadingMEDZika(){
		for (var i = 0; i < 8; i++) {

			newsLineData[i].data = getmonthtotal(2015,i+5,linezikaArray);//2000;//
		}
		newsLineData[8].data = getmonthtotal(2016,1,linezikaArray);
		newsLineData[9].data = getmonthtotal(2016,2,linezikaArray);
}
function loadingTWIInflu(){
		for (var i = 0; i < 8; i++) {

			twitterLineData[i].data = getmonthtotal(2015,i+5,twitterinflluenzaArray);//2000;//
		}
		twitterLineData[8].data = getmonthtotal(2016,1,twitterinflluenzaArray);
		twitterLineData[9].data = getmonthtotal(2016,2,twitterinflluenzaArray);
}
function loading(chartdata,dataarray){
		for (var i = 0; i < 8; i++) {

			chartdata[i].data = getmonthtotal(2015,i+5,dataarray);//2000;//
		}
		chartdata[8].data = getmonthtotal(2016,1,dataarray);
		chartdata[9].data = getmonthtotal(2016,2,dataarray);
}
setTimeout(function(){}, 1000);
// setTimeout(function(){

// 				console.log(linezikaArray[15]);
// 			  console.log(linezikaArray[16]);
// 			for (var i = 0; i < 8; i++) {

// 			newsLineData[i].data = getmonthtotal(2015,i+5,linezikaArray);//2000;//
// 		}
// 		newsLineData[8].data = getmonthtotal(2016,1,linezikaArray);
// 		newsLineData[9].data = getmonthtotal(2016,2,linezikaArray);

// }, 1000);
// setTimeout(function(){
	
// 		console.log("selected influ");
// 					console.log(twitterinflluenzaArray[15]);
// 			  console.log(twitterinflluenzaArray[16]);
// 			for (var i = 0; i < 8; i++) {

// 			twitterLineData[i].data = getmonthtotal(2015,i+5,twitterinflluenzaArray);//2000;//
// 		}
// 		twitterLineData[8].data = getmonthtotal(2016,1,twitterinflluenzaArray);
// 		twitterLineData[9].data = getmonthtotal(2016,2,twitterinflluenzaArray);
	

// }, 2000);

 var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
var label = mS[1]+"09";
var unitdata = 0;
function getMS(month){
	var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	return mS[month-1];
}
function getMonth(String){
	var mS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	for (var i = 0; i < ms.length; i++) {
		if(ms[i]==String){
			return i+1;
		}
	}
	return -1;
}
//choose time range
//label change dynamically
//getlabel
//getdata
//get unit pair/daily
//push the unit to newlinedata

//mongodb test 
//label -data
//for 
//push label data

var influenzaNetData = [
{ "label": "May 15", "data": 19.3*25,},
{ "label": "Jun 15", "data": 36.5*25,},
{ "label": "Jul 15", "data": 636.5*25,},
{ "label": "Aug 15", "data": 112.8*25,},
{ "label": "Sep 15", "data": 67.7*25,},
{ "label": "Oct 15", "data": 196.7*25,},
{ "label": "Nov 15", "data": 191*25,},
{ "label": "Dec 15", "data": 118.1*25,},
{ "label": "Jan 16", "data": 191*25,},
{ "label": "Feb 16", "data": 118.1*25,}
]

var currentData = [
{ "label": "May 15", "data": 50,},
{ "label": "Jun 15", "data": 40,},
{ "label": "Jul 15", "data": 401,},
{ "label": "Aug 15", "data": 99,},
{ "label": "Sep 15", "data": 48,},
{ "label": "Oct 15", "data": 120,},
{ "label": "Nov 15", "data": 193,},
{ "label": "Dec 15", "data": 104,},
{ "label": "Jan 16", "data": 104,},
{ "label": "Feb 16", "data": 104,}
]

var histData = [
{ "label": "May 15", "data": 80,},
{ "label": "Jun 15", "data": 45,},
{ "label": "Jul 15", "data": 53,},
{ "label": "Aug 15", "data": 30,},
{ "label": "Sep 15", "data": 34,},
{ "label": "Oct 15", "data": 61,},
{ "label": "Nov 15", "data": 62,},
{ "label": "Dec 15", "data": 68,},
{ "label": "Jan 16", "data": 104,},
{ "label": "Feb 16", "data": 104,}
]

var from;
var to;
var finalDataSet=[];

document.getElementById("mainSubmit").addEventListener("click", function myFunction(){
	var copy_twi1 =  [
{ "label": "May 15", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Jun 15", "data": 6822, "quakePoints": [[53.249595, -0.637693,574]]},
{ "label": "Jul 15", "data": 25737,"quakePoints": [[53.901294, -2.104019,2533]]},
{ "label": "Aug 15", "data": 15424,"quakePoints": [[55.125738, -1.898219,1575]]},
{ "label": "Sep 15", "data": 22334,"quakePoints": [[55.936173, -3.433145,3000]]},
{ "label": "Oct 15", "data": 51680,"quakePoints": [[51.536117, -0.122885,2138], [51.536117, -0.122885,2643]]},
{ "label": "Nov 15", "data": 27937,"quakePoints": [[51.190784, -1.992544,2536], [50.715424, -3.621795,2314]]},
{ "label": "Dec 15", "data": 7823,"quakePoints": [[53.508247, -2.735988,864]]},
{ "label": "Jan 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]},
{ "label": "Feb 16", "data": 1357, "quakePoints": [[51.490393,-0.109152,2183]]}
]
var copy_med1 = [
{ "label": "May 15", "data": 7354*2,},
{ "label": "Jun 15", "data": 8559*2,},
{ "label": "Jul 15", "data": 6991*2,},
{ "label": "Aug 15", "data": 9249*2,},
{ "label": "Sep 15", "data": 7167*2,},
{ "label": "Oct 15", "data": 8764*2,},
{ "label": "Nov 15", "data": 8230*2,},
{ "label": "Dec 15", "data": 2731*2,},
{ "label": "Jan 16", "data": 2731*2,},
{ "label": "Feb 16", "data": 2731*2,}
]
	twitterLineData = copy_twi1;
	console.log(copy_twi);
	console.log(twitterLineData);
	newsLineData =copy_med1;
	 	if(document.getElementById("Influenzaoption").selected == true){
			loading(twitterLineData,twitterinflluenzaArray);
			loading(newsLineData,medisysInfluenzaArray);
			//loadingTWIInflu();
		console.log("selected influ");

	// 		for (var i = 0; i < 8; i++) {

	// 		twitterLineData[i].data = getmonthtotal(2015,i+5,twitterinflluenzaArray);//2000;//
	// 	}
	// 	twitterLineData[8].data = getmonthtotal(2016,1,twitterinflluenzaArray);
	// 	twitterLineData[9].data = getmonthtotal(2016,2,twitterinflluenzaArray);
	}

	if(document.getElementById("Zikaoption").selected == true){
		// twitterLineData = copy_twi;
		// newsLineData =copy_med;
		loading(twitterLineData,twitterZikaArray);
			loading(newsLineData,linezikaArray);
		console.log("selected Zikaoption");
	// 	for (var i = 0; i < 8; i++) {

	// 		newsLineData[i].data = getmonthtotal(2015,i+5,linezikaArray);//2000;//
	// 	}
	// 	newsLineData[8].data = getmonthtotal(2016,1,linezikaArray);
	// 	newsLineData[9].data = getmonthtotal(2016,2,linezikaArray);
		

	 }

   // changeSwinelineFunction(0,twitterLineData);
   // changeSwinelineFunction(1,newsLineData);
   // changeSwinelineFunction(2,influenzaNetData);
   // console.log(finalDataSet);
    finalSwineLine();
    finalSurvLine();
    //changeSurvlineFunction(0, currentData);
    //changeSurvlineFunction(1,histData);
    changeGraphDatesFunction();
 //   getQuakePoints();
 //testDatemanip(myMongoData);
});


function finalSwineLine(){
  var finalDataArray = [];
  var finalSeriesArray = [];
  if (document.getElementById("twitterCheck").checked){
  //  finalDataArray.push(changeLineDataSpec(0,myMongoData));
    finalDataArray.push(changeLineData(1,twitterLineData));
    console.log(finalDataArray);
    finalSeriesArray.push("Twitter");
  }
  if (document.getElementById("medisysCheck").checked){
    finalDataArray.push(changeLineData(1,newsLineData));
    console.log(finalDataArray);
    finalSeriesArray.push("Medisys");
  }
  if (document.getElementById("influenzaNetCheck").checked){
    finalDataArray.push(changeLineData(2,influenzaNetData));
    console.log(finalDataArray);
    finalSeriesArray.push("Influenzanet (x25)");
  }
  //finalArray.push(changeLineData(0,twitterLineData));
 // finalDataArray.push(changeLineData(1,newsLineData));
 // finalDataArray.push(changeLineData(2,influenzaNetData));
//  finalArray[1] = changeLineData(1,newsLineData);
 // finalArray[2] = changeLineData(2,influenzaNetData);
// finalSeriesArray.push("News (x2)");
// finalSeriesArray.push("Influenzanet (x25)");

  //console.log(finalArray);
  $scope.swineline.data = finalDataArray;
  $scope.swineline.series = finalSeriesArray;
  console.log(finalDataArray);
}

function finalSurvLine(){
  var finalDataArray = [];
  var finalSeriesArray = [];
  if (document.getElementById("labReportCheck").checked){
    finalDataArray.push(changeLineData(0,currentData));
    finalSeriesArray.push("Rate of ILI episodes");
  }
  if (document.getElementById("histReportCheck").checked){
    finalDataArray.push(changeLineData(1,histData));
    finalSeriesArray.push("Historical survelliance rate per 100,000");
  }

  $scope.survellianceline.data = finalDataArray;
  $scope.survellianceline.series = finalSeriesArray;
}

function testDatemanip(myDataSet){
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
   // console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));
    //var myString = myDataSet[0].label.substring(0, 3);
    //console.log(myString);

    var myArray = [];
    //console.log(typeof())
    myArray.push(myDataSet[3].value);
    console.log(myArray);
}

function getDate(){
  var socket = io.connect();
  
}

function changeLineDataSpec(myNumber, myDataSet){
 // console.log("fired");
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
   // console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));

    var newArray = [];
    var smalli;
    var bigi;

    for (var i=0; i<myDataSet.length; ++i)
    {
      if (moment(from).format("MMM YY").substring(0, 3) == myDataSet[i].label.substring(0, 3)){
        smalli = i+1;
        console.log(i);
      }
      if (moment(to).format("MMM YY").substring(0, 3) == myDataSet[i].label.substring(0, 3)){
        bigi = i;
        console.log(i);
      }
    }
    for (var j = bigi; j<smalli; j++)
    {
      console.log("push");
      newArray.push(myDataSet[j].value);
      
    }
    //$scope.swineline.data[myNumber] = newArray;
  return newArray;
}

function changeLineData(myNumber, myDataSet){
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
  //  console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));

    var newArray = [];
    var smalli;
    var bigi;

    for (var i=0; i<myDataSet.length; ++i)
    {
      if (moment(from).format("MMM YY") == myDataSet[i].label){
        smalli = i;
      }
      if (moment(to).format("MMM YY") == myDataSet[i].label){
        bigi = i+1;
      }
    }//from index and to index
    for (var j = smalli; j<bigi; j++)
    {
      newArray.push(myDataSet[j].data);
    }
    //$scope.swineline.data[myNumber] = newArray;
  return newArray;
}

/*
function changeSwinelineFunction(myNumber, myDataSet){
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
   // console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));

    var newArray = [];
    var smalli;
    var bigi;

    for (var i=0; i<myDataSet.length; ++i)
    {
      if (moment(from).format("MMM YY") == myDataSet[i].label){
        smalli = i;
      }
      if (moment(to).format("MMM YY") == myDataSet[i].label){
        bigi = i+1;
      }
    }
    for (var j = smalli; j<bigi; j++)
    {
      newArray.push(myDataSet[j].data);
    }
    //newsLineArray = newArray;
    //console.log(newsLineArray);
    $scope.swineline.data[myNumber] = newArray;
  //  $scope.swineline.labels = [5,6,7,8,9,10,11,12];


  finalDataSet.push(newArray);
}

function changeSurvlineFunction(myNumber, myDataSet){
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
   // console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));

    var newArray = [];
    var smalli;
    var bigi;

    for (var i=0; i<myDataSet.length; ++i)
    {
      if (moment(from).format("MMM YY") == myDataSet[i].label){
        smalli = i;
      }
      if (moment(to).format("MMM YY") == myDataSet[i].label){
        bigi = i+1;
      }
    }
    for (var j = smalli; j<bigi; j++)
    {
      newArray.push(myDataSet[j].data);
    }
    //newsLineArray = newArray;
    //console.log(newsLineArray);
    $scope.survellianceline.data[myNumber] = newArray;
  //  $scope.swineline.labels = [5,6,7,8,9,10,11,12];
}*/


function changeGraphDatesFunction(){
  var $this = $range;
    from = moment($this.data("from"),"X");
    to = moment($this.data("to"),"X");
   // console.log( moment(from).format("MMM YY") + " - " + moment(to).format("MMM YY"));

    var newArray = [];
    var smalli;
    var bigi;

    for (var i=0; i<newsLineData.length; ++i)
    {
      if (moment(from).format("MMM YY") == newsLineData[i].label){
        smalli = i;
      }
      if (moment(to).format("MMM YY") == newsLineData[i].label){
        bigi = i+1;
      }
    }
    for (var j = smalli; j<bigi; j++)
    {
      newArray.push(newsLineData[j].label);
    }
    //newsLineArray = newArray;
    //console.log(newsLineArray);
    $scope.swineline.labels = newArray;
    $scope.survellianceline.labels=newArray;
  //  $scope.swineline.labels = [5,6,7,8,9,10,11,12];
}

//console.log(twitterLineData[0].label);

    $scope.swineline = {
      labels: ['May 15','Jun 15', 'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15','Jan 15','Feb 15'],
        series: ['Twitter','News (x2)','Influenzanet (x25)'],
        data: [
          [1357,6822,25737,15424,22334,51680,27937,7822,5678,3635],
          [7354*2,8559*2,6991*2,9249*2,7167*2,8764*2,8230*2,2734*2,123,141],
          [19.3*25,36.5*25,636.5*25,112.8*25,67.7*25,196.7*25,191*25,118.1*25,123,432]
        ],
        colours: ['#97BBCD','#46BFBD','#F7464A']
    }

    $scope.survellianceline = {
      labels: ['May 15','Jun 15', 'Jul 15', 'Aug 15', 'Sep 15', 'Oct 15', 'Nov 15', 'Dec 15','Jan 15','Feb 15'],
        series: ['Rate of ILI episodes','Historical survelliance rate per 100,000'],
        data: [
          [50,40,401,99,48,120,193,104,123,112],
          [80,45,53,30,34,61,62,69,76,45,36]
        ],
        colours: ['#97BBCD','#46BFBD','#F7464A']

    }
    //$scope.colors = ['#FD1F5E','#1EF9A1','#7FFD1F','#68F000'];



    $scope.bar = {
	    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
		series: ['Series A', 'Series B'],
		data: [
		   [65, 59, 80, 81, 56, 55, 40],
		   [28, 48, 40, 19, 86, 27, 90]
		]
    	
    };

    $scope.donut = {
    	labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data: [300, 500, 100]
    };

    $scope.radar = {
    	labels:["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],

    	data:[
    	    [65, 59, 90, 81, 56, 55, 40],
    	    [28, 48, 40, 19, 96, 27, 100]
    	]
    };

    $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data : [300, 500, 100]
    };

    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function () 
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		  }
    };
}]);

function getRandomValue (data) {
    var l = data.length, previous = l ? data[l - 1] : 50;
    var y = previous + Math.random() * 10 - 5;
    return y < 0 ? 0 : y > 100 ? 100 : y;
  }