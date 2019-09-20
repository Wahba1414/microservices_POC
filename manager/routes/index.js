var express = require('express');
var router = express.Router();
var request = require('request')

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });

  console.log('Manager::Get main page');

  var watchesListAPI = `http://${process.env.WATCHES_HOST}:${process.env.WATCHES_PORT}/watches`

  console.log('watchesListAPI: ', watchesListAPI);

  request(watchesListAPI , function(error,response, body)  {
    if(error){
      console.log('Manager::error: ' , error);
    }else{
      res.send('From Manager service: ' + body);
    }
    // console.log('Manager:: response from watches service: ', response);
  })


});

module.exports = router;
