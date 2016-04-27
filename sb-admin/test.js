var request = require("request"),
  cheerio = require("cheerio"),
  url = "http://medisys.newsbrief.eu/medisys/alertedition/en/Avianflu.html";
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body);
      temperature = $("[href=\"http://www.ad-hoc-news.de/bonn-dpa-cyber-attacken-auf-krankenhaeuser-sind-nach-einschaetzung-des--/de/News/48434639\"] ").attr("href");
      
    console.log("It’s " + temperature + " degrees Fahrenheit.");
  } else {
    console.log("We’ve encountered an error: " + error);
  }
});