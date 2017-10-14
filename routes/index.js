var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

  axios.post('http://127.0.0.1:8888/prever', {
      orcamento: 100000,
      ano: 2010
    })
    .then(function (response) {
      console.log(response.data);
      res.render('index', { title: response.data });
    })
    .catch(function (error) {
      console.log(error);
    });


});

module.exports = router;
