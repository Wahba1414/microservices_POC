var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DATABASE_NAME
} = process.env;

// Connection URL
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`;

// Create a new MongoClient
const client = new MongoClient(url);

let db;
// Use connect method to connect to the Server
setTimeout(() => {
  client.connect(function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("Connected successfully to database");
    db = client.db(MONGO_DATABASE_NAME);
  });
}, 2000);

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Watches service::Get watches list');

  if (db) {
    db.collection('watches').find({}).toArray(function(err, watches) {
      if (err) {
        console.error(err);
        res.status(500).send('watches service::Error happened during reading from db');
      } else {
        console.log('watches service:: read watches list from db succeeded');
        var response = '<br>';
        
        watches.forEach(watch => {
          response += watch.name + ' ====> ' + watch.price + '<br>';
        });

        res.json(response);
      }
    });
  }else{
    res.status(500).send('watches service::No DB is connected');
  } 

});

module.exports = router;
