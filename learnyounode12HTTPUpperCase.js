 /*
 ## HTTP UPPERCASERER (Exercise 12 of 13)  
   
  Write an HTTP server that receives only POST requests and converts  
  incoming POST body characters to upper-case and returns it to the client.  
   
  Your server should listen on the port provided by the first argument to  
  your program.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  While you're not restricted to using the streaming capabilities of the  
  request and response objects, it will be much easier if you do.  
   
  There are a number of different packages in npm that you can use to  
  "transform" stream data as it's passing through. For this exercise the  
  through2-map package offers the simplest API.  
   
  through2-map allows you to create a transform stream using only a single  
  function that takes a chunk of data and returns a chunk of data. It's  
  designed to work much like Array#map() but for streams:  
   
     var map = require('through2-map')  
     inStream.pipe(map(function (chunk) {  
       return chunk.toString().split('').reverse().join('')  
     })).pipe(outStream)  
   
  In the above example, the incoming data from inStream is converted to a  
  String (if it isn't already), the characters are reversed and the result  
  is passed through to outStream. So we've made a chunk character reverser!  
  Remember though that the chunk size is determined up-stream and you have  
  little control over it for incoming data.  
  */
  var http = require('http')
  var fs=require('fs')
  var net = require('net')
   var fs=require('fs')
  
// var map = require("through2-map")  
  
  
  
     var port = process.argv[2];
     console.log(port);
   //var filepath = process.argv[3];
  // console.log(filepath);
        var server = http.createServer(function (req, res) {
         console.log(req.method);
         if(req.method == "POST"){
          let body = [];
req.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
 
  body = Buffer.concat(body).toString().toUpperCase();
  console.log(body);
//  Buffer.concat(body).toString().toUpperCase().pipe(res);
  res.write(body);
  
  // at this point, `body` has the entire request body stored in it as a string
});
          
          
          
         }// if post
       // request handling logic...
       //1read file
       //2 stream file
       //fs.createReadStream(filepath).pipe(res);
       
       
     })  
     server.listen(port) 