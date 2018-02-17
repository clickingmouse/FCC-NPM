//## HTTP JSON API SERVER (Exercise 13 of 13)  
/*   
  Write an HTTP server that serves JSON data when it receives a GET request  
  to the path '/api/parsetime'. Expect the request to contain a query string  
  with a key 'iso' and an ISO-format time as the value.  
   
  For example:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  The JSON response should contain only 'hour', 'minute' and 'second'  
  properties. For example:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Add second endpoint for the path '/api/unixtime' which accepts the same  
  query string but returns UNIX epoch time in milliseconds (the number of  
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.  
  For example:  
   
     { "unixtime": 1376136615474 }  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  The request object from an HTTP server has a url property that you will  
  need to use to "route" your requests for the two endpoints.  
   
  You can parse the URL and query string using the Node core 'url' module.  
  url.parse(request.url, true) will parse content of request.url and provide  
  you with an object with helpful properties.  
   
  For example, on the command prompt, type:  
   
     $ node -pe "require('url').parse('/test?q=1', true)"  
   
  Documentation on the url module can be found by pointing your browser  
  here:  
  file:///home/ec2-user/.nvm/versions/node/v6.12.3/lib/node_modules/learnyou  
  node/node_apidoc/url.html  
   
  Your response should be in a JSON string format. Look at JSON.stringify()  
  for more information.  
   
  You should also be a good web citizen and set the Content-Type properly:  
   
     res.writeHead(200, { 'Content-Type': 'application/json' })  
   
  The JavaScript Date object can print dates in ISO format, e.g. new  
  Date().toISOString(). It can also parse this format if you pass the string  
  into the Date constructor. Date.getTime() will also come in handy.  
   
 ─────────────────────────────────────────────────────────────────────────────  */
 
   var http = require('http')
  var fs=require('fs')
  var net = require('net')
   var fs=require('fs')
  var url= require('url')
// var map = require("through2-map")  
  
  
  
     var port = process.argv[2];
     console.log(port);
   //var filepath = process.argv[3];
  // console.log(filepath);
        var server = http.createServer(function (req, res) {
            res.writeHead(200, { 'Content-Type': 'application/json' }) ;
   //      console.log(req.url);
    //     console.log(url.parse(req.url, true));
    console.log(req.method);
         
        var urlObj = url.parse(req.url, true);
         if(req.method == "GET"){
             
     var pathname = urlObj['pathname'];
     var reqKey = Object.keys(urlObj.query);
     console.log(pathname +" "+reqKey);
     console.log("line2");
     var retObj={};
//     if(reqKey =="iso") {
         if (pathname =="/api/parsetime"){
         console.log("========> ISO");
         var data = urlObj.query[reqKey];
         var d = new Date (data);
         
         var hour ="";
         var minute ="";
         var second ="";
         var hStartIdx = data.indexOf('T');
         var hEndIdx = data.indexOf(':');
         var mStartIdx = data.indexOf(':', hEndIdx);
         var mEndIdx = data.indexOf(':', mStartIdx);
         
         console.log("converting::::::"+ data + " 2 " + d);
         console.log(d.getHours().toString() +"/"+ d.getMinutes().toString()+"/" + d.getSeconds().toString())
         retObj = {
             "hour": d.getHours(),
             "minute":  d.getMinutes(),
             "second": d.getSeconds()
             };
         
  res.end( JSON.stringify(retObj));
         
     } else if (pathname == "/api/unixtime"){
         
         console.log("=======> unixtime");
         var data = urlObj.query[reqKey];
         var d = new Date (data);
         retObj = {
             "unixtime" : Math.round(d.getTime() )
         }
           res.end( JSON.stringify(retObj));

     }
     
//  res.writeHead(200, { 'Content-Type': 'application/json' }) ;
//  res.end( JSON.stringify(retObj));
console.log("pass back:::" + JSON.stringify(retObj));

         }
         
     })  
     server.listen(port) 
 