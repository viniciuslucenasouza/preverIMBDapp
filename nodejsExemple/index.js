const express = require('express');
const dotenv = require('dotenv').load();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./server/routes/index');
const app = express();


app.use(helmet());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view options", {layout: false});
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + "/public/views");
app.set('view engine', 'ejs');

if (app.get('env') === 'production') {
	console.log("Server funcionando no modo de produção.");
	app.use(morgan('tiny'));
	app.use(compression());
} else {
	console.log("Server funcionando no modo de desenvolvimento.");
	app.use(morgan('dev'));
}

// pass routes
routes(app, __dirname);

const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
	console.log("Ouvindo na porta " + listener.address().port);
});
