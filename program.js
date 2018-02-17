var fs = require('fs')
var path = require('path')
//const bl=require('bl')
//var concat=require('concat-stream')
/*Exerise 8
  Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Collect all data from the server (not  
  just the first "data" event) and then write two lines to the console  
  (stdout).  
   
  The first line you write should just be an integer representing the number  
  of characters received from the server. The second line should contain the  
  complete String of characters sent by the server.  */
  
  /*
     
  There are two approaches you can take to this problem:  
   
  1) Collect data across multiple "data" events and append the results  
  together prior to printing the output. Use the "end" event to determine  
  when the stream is finished and you can write the output.  
   
  2) Use a third-party package to abstract the difficulties involved in  
  collecting an entire stream of data. Two different packages provide a  
  useful API for solving this problem (there are likely more!): bl (Buffer  
  List) and concat-stream; take your pick!  
   
  <https://npmjs.com/bl> <https://npmjs.com/concat-stream>  
  */
  
  
var http=require('http') 
 var URL = process.argv[2];
 
 http.get(URL, function(response){
  //var bl = new BufferList();
  let result="";
     response.setEncoding('utf8');
     
     
  response.on('error', (err) => {
    console.error(err);
  });

  response.on('data', (data) => {
    result += data;
  });

  response.on('end', () => {
    console.log(result.length);
    console.log(result);
  });
     /*
     response.on("data", function (data) { 
      //console.log(data)   
    // bl.append(new Buffer(response))
  //  var concatStream=concat(data);
     });*/
     //console.log(bl.length);
     //console.log(bl);
//     console.log(response);
    
     
     
//     console.log(response);
//     console.log (response.setEncoding('utf8'));
     
     
     
     
 }/*function*/ )//http.get


/* Exercise 7
 Write a program that performs an HTTP GET request to a URL provided to you  
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).  
  */
  /*
 var http=require('http') 
 var URL = process.argv[2];
 http.get(URL, function(response){
     response.setEncoding('utf8');
    // console.log(response);
     response.on("data", function (data) { console.log(data) });  
//     console.log(response);
//     console.log (response.setEncoding('utf8'));
     
     
     
     
 }/*function* )//http.get*/
  


/*Exercise 6
 var FCCmodule = require('./FCCModule.js');
 var dirName = process.argv[2];
 var filemameExt = process.argv[3];
 
 
FCCModule(dirName, filenameExt, function(err, listOfFilesArr){     
 for (var i = 0; i < listOfFilesArr.length; i++){
     console.log(listOfFilesArr[i]);
 }
}  )  ;
*/
/*


mymodule(path, format, function(err, myData) {
  for(var i = 0; i < myData.length; i++) {
    console.log(myData[i]);
  }
});

*/


/* excercise #6 
var mymodule = require('./mymodule.js');

var filePath = process.argv[2];
 var fileFormat = process.argv[3];

mymodule(filePath, fileFormat, function(err, myData) {
  for(var i = 0; i < myData.length ; i++) {
      console.log(myData.length);
    console.log(myData[i]);
  }
});
*/

/*************************
//console.log("start");
var data=[];
mymodule(process.argv[2], process.argv[3], function(err, arr){
 for(var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
});
*******************************/
//console.log("==EOF==");
//console.log(mymodule(process.argv[2], process.argv[3], data));

    /*official answer to #5
    var folder = process.argv[2]
    var ext = '.' + process.argv[3]
    
    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/

// console.log("HELLO WORLD")  ;
 //console.log(process.argv)  ;
 //console.log(process.argv.length);
 
 /*
 var argCount = process.argv.length - 2;
 var argsSum =0
 for (var i=2; i<process.argv.length; i++){
     argsSum = argsSum + parseInt(process.argv[i]);
 }
 console.log(argsSum);
 */
 /*
 var str = fs.readFileSync(process.argv[2]);
 var tmpStr = str.toString();
// console.log(tmpStr);
 var arr = tmpStr.split('\n');
 console.log(arr.length -1);*/
 
 /*Excercise 4
 fs.readFile(process.argv[2], function(err, data){
    if (err) throw err;
    var dataString = data.toString();
    var dataArr = dataString.split('\n');
    console.log( dataArr.length - 1 );
     
 });
 */
 
 /* Exercise 5 
 list = array of filename array
 */
 /*
 fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
    
    var fileExtension = process.argv[3];
    for (var i = 0; i< list.length; i++){
var filename = list[i];
var regex = new RegExp("."+fileExtension);
//console.log(regex);
//console.log(regex.test(filename));
if (filename.match(regex)){
console.log(filename);        
    
}
    }

 });
 
 */
 
 
 
 
 