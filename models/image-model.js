// var db=require('../database');
// module.exports.displayImage = function(callback){
//    // check unique email address
//    var sql='SELECT image_name FROM images';
//    db.query(sql,function (err, data, fields) {
//    if(err) throw err
//    return callback(data);
//   })
//   }


var db = require("../database");
module.exports.storeImage = function (inputValues, callback) {
  // check unique email address
  var sql = "SELECT * FROM images WHERE image_name =?";
  db.query(sql, inputValues.image_name, function (err, data, fields) {
    if (err) throw err;
    if (data.length > 1) {
      var msg = inputValues.image_name + " is already exist";
    } else {
      // save users data into database
      var sql = "INSERT INTO images SET ?";
      db.query(sql, inputValues, function (err, data) {
        if (err) throw err;
      });
      var msg = inputValues.image_name + "is uploaded successfully";
    }
    return callback(msg);
  });
};


module.exports.displayImage = function(callback){
   // check unique email address
   var sql='SELECT image_name FROM images';
   db.query(sql,function (err, data, fields) {
   if(err) throw err
   return callback(data);
  })
 }