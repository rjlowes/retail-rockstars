const gulp = require('gulp');
const Server = require('karma').Server;

const testFiles = [
	''
];

gulp.task('test:unit', ['scripts'], function (done) {
	console.log('running test:unit');
	new Server({
		// configFile: __dirname + '/karma.conf.js',
		configFile: require('path').resolve('karma.conf.js'),
		singleRun: true
	}, done).start();
});



// var gulp = require('gulp'),
// 	//KarmaServer = require('karma').Server;
// 	protractor = require("gulp-protractor").protractor,
// 	webdriver_update = require('gulp-protractor').webdriver_update,
//   	webdriver_standalone = require('gulp-protractor').webdriver_standalone;

// // http://michael-kuehnel.de/node.js/2015/09/08/using-vm-to-switch-node-versions.html


// // Karma test runner task
// // gulp.task('karma', function (done) {
// //   new KarmaServer({
// //     configFile: __dirname + '/karma.conf.js',
// //     singleRun: true
// //   }, done).start();
// // });

// // Downloads the selenium webdriver
// gulp.task('webdriver_update', webdriver_update);

// // Start the standalone selenium server
// // NOTE: This is not needed if you reference the
// // seleniumServerJar in your protractor.conf.js
// gulp.task('webdriver_standalone', ['webdriver_update'], webdriver_standalone);


// // gulp.task('test:e2e', function () {

// // 	gulp.src(["./src/tests/*.js"])
// // 	    .pipe(protractor({
// // 	        configFile: "test/protractor.config.js",
// // 	        args: ['--baseUrl', 'http://127.0.0.1:8000']
// // 	    }))
// // 	    .on('error', function(e) { throw e })

// // });


// // Protractor test runner task
// gulp.task('protractor', ['webdriver_update'], function () {
// 	console.log('###################### starting protractor task');
//   gulp.src([])
//     .pipe(protractor({
//       configFile: 'protractor.conf.js'
//     }))
//     .on('end', function() {
//       console.log('E2E Testing complete');
//       // exit with success.
//       process.exit(0);
//     })
//     .on('error', function(err) {
//       console.error('E2E Tests failed:');
//       console.error(err);
//       process.exit(1);
//     });
// });

// gulp.task('test:e2e', function (done) {
//   runSequence('env:test', 'lint', 'dropdb', 'nodemon', 'protractor', done);
// });