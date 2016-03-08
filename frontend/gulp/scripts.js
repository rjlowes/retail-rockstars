var gulp = require('gulp'),
	// TODO change to browserify as gulp-browserify is no longer supported!!!
	// browserify = require('gulp-browserify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	rename = require('gulp-rename');


// Need to make it build ready and copy to dist
// gulp.task('scripts', function () {
// 	gulp.src('app/scripts/app.js')
// 		.pipe(browserify({
// 			insertGlobals: true,
// 			debug: !gulp.env.production
// 		}))
// 		.pipe(rename('rockstars.js'))
// 		.pipe(gulp.dest('.tmp/scripts'));
// });

// Need to make it build ready and copy to dist and remove debug
gulp.task('scripts', function () {
	return browserify('app/scripts/app.js')
			.bundle()
			.pipe(source('rockstars.js'))
			.pipe(gulp.dest('.tmp/scripts'));
});