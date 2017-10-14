var axios = require('axios');

module.exports = function (app, dirname) {
	require('./static')(app, dirname);

	app.get('/', function (req, res) {
		res.render('capa.ejs');
	});

	app.post('/prever', function (req, res) {

		axios.post('http://127.0.0.1:8888/prever', {
	      orcamento: req.body.orcamento,
	      ano: req.body.ano
	    })
	    .then(function (response) {
	      console.log(response.data);
	      res.send(response.data);
	    })
	    .catch(function (error) {
	      console.log(error);
	    });


	});

	app.get('*', function (req, res) {
		res.status(404).send("this is 404.");
	});
}
