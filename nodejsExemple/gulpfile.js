var gulp = require('gulp');
var jsminify = require('gulp-minify');
var cssminify = require('gulp-cssmin');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

var port = 8080;

gulp.task('default', function () {
	gulp.start('build');
});

gulp.task('build', function () {
	gulp.start('clean');
	gulp.start('minify');
});

gulp.task('browserSync', function () {
	browserSync.init({
		proxy: 'http://localhost:' + port,
		open: false,
		notify: false
	})
})

// Minify
gulp.task('minify', function () {
	gulp.start('minify-css');
	gulp.start('minify-js');
});

gulp.task('minify-js', function () {
	gulp.src('public/js/*.js').pipe(jsminify({
		ext: {
			src: '-debug.js',
			min: '.js'
		}
	})).pipe(gulp.dest('public/dist/js'));

	browserSync.reload();
});

gulp.task('minify-css', function () {
	gulp.src('public/css/*.css').pipe(cssminify()).pipe(gulp.dest('public/dist/css'));
	browserSync.reload();
});

// Limpar arquivos
gulp.task('clean', function () {
	gulp.src('public/dist/css/*.css', {read: false}).pipe(clean());
	gulp.src('public/dist/js/*.js', {read: false}).pipe(clean());
	return;
});

// Watch
gulp.task('watch', [
	'browserSync', 'nodemon'
], function () {
	gulp.watch('public/js/*.js', ['minify-js']);
	gulp.watch('public/css/*.css', ['minify-css']);
});

gulp.task('nodemon', function (cb) {
	var callbackCalled = false;
	return nodemon({script: 'index.js'}).on('start', function () {
		if (!callbackCalled) {
			callbackCalled = true;
			cb();
		}
	});
});
