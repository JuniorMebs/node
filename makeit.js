var myModule = require('./my-module');

var directory = process.argv[2];
var filter = process.argv[3];

var callback = function(error, filtered) {
  if (error) {
    console.log('error');
    console.log(error);
  }
  for (var index in filtered) {
    console.log(filtered[index]);
  }
};

myModule(directory, filter, callback);


var fs = require('fs');
var path = require('path');

function filterFiles(list, filter) {
  return list.filter(function(file) {
    return path.extname(file) == '.' + filter;
  });
};

module.exports = function(directory, filter, callback) {

  fs.readdir(directory, function(error, list) {
    if (error) {
      return callback(error);
    }
    var filtered = filterFiles(list, filter);
    return callback(null, filtered);
  });

};
 