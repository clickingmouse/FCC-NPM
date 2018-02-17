var fs = require('fs')
var path = require('path')


module.exports = function(path, format, callback) {
  fs.readdir(path, function(err, myData) {
if(err) return callback(err);
format = "." + format;
var list = [];
for(var i = 0; i < myData.length; i++) {
  		var element = myData[i];
  		if(element.indexOf(format) !== -1) {
  			list.push(myData.splice(i, 1).toString());
  			i--;
  		}
};
callback(err, list);
  });
}

/*
module.exports = function(filePath, fileFormat, callback) {
    fs.readdir(path, function(err, files) {
        if(err) return callback(err);
        var format = "." + fileFormat;

        var list = [];
        var folder = filePath;
        var ext = '.' + format;
        var filesArr=[];
    
        var fileExtension = fileFormat;
        for (var i = 0; i< list.length; i++){
            var filename = list[i];
            var regex = new RegExp("."+fileExtension);
//console.log(regex);
//console.log(regex.test(filename));
                if (filename.match(regex)){
//console.log(filename);        
                    filesArr[filesArr.length]= filename;  
                } 
            }

        });
 
    
    callback(err, filesArr);
    //});
}
*/
/*
//    official answer to #5




 module.exports = function (folder, ext, callback) {  
    var ext = '.' + ext;
    var arr = [];
    fs.readdir(folder, function (err, files) {
      if (err) return callback(err);
      files.forEach(function (file) {
        return callback(null, arr);
        if (path.extname(file) === ext) {
      //    console.log(file)
            arr[arr.length]= file;
        }
      })
      //return arr;
     callback(null, arr); 
    })
    //return arr;
}*/
/*
function callback(arg1, arg2){
  return arg2;
}
*/
/////////////////////////////////////
     function bar (callback) {  
       foo(function (err, data) {  
         if (err)  
           return callback(err) // early return  
       
         // ... no error, continue doing cool things with `data`  
       
         // all went well, call callback with `null` for the error argument  
       
         callback(null, data)  
       })  
     }  