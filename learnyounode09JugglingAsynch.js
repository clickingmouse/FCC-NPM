var fs = require('fs')
var path = require('path')
/*
 This problem is the same as the previous problem (HTTP COLLECT) in that  
  you need to use http.get(). However, this time you will be provided with  
  three URLs as the first three command-line arguments.  
   
  You must collect the complete content provided to you by each of the URLs  
  and print it to the console (stdout). You don't need to print out the  
  length, just the data as a String; one line per URL. The catch is that you  
  must print them out in the same order as the URLs are provided to you as  
  command-line arguments.  */
  var http=require('http') 
  
 var URL1 = process.argv[2];
 var URL2 = process.argv[3];
 var URL3 = process.argv[4];
 bufferArr=[];
 
bufferArr[0]= URL1;
bufferArr[1]= URL2;
bufferArr[2]= URL3;
 
 /*
 console.log(URL1 + " " + URL2 + " " + URL3);
 */
 for(var i =0; i<3; i++){
url = bufferArr[i];
 http.get(url, function(response){
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
    //console.log(result.length);
    console.log(result);
  });
 });
 }
 //});
 /*
 ///////////////////////////////////////////////// 
  http.get(URL2, function(response){
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
    //console.log(result.length);
    console.log(result);
  });
  });
 ////////////////////////////////////////////////////// 
  http.get(URL3, function(response){
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
    //console.log(result.length);
    console.log(result);
  });
 })
 */
 
 
 