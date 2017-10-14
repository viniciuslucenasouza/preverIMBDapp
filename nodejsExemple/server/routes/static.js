var express = require('express');

module.exports = function (app, dirname) {
	app.use('/css', express.static(dirname + '/public/dist/css'));
	app.use('/css/themes/default/assets', express.static(dirname + '/public/css/themes/default/assets'));
	app.use('/js', express.static(dirname + '/public/dist/js'));
	app.use('/img', express.static(dirname + '/public/img'));
	app.use('/logo', express.static(dirname + '/public/img/logo'));
};
