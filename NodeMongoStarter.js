var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/GrapeFruit";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database GrapeFruit created!");
  db.close();
});


console.log("fini");
