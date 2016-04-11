var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
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
			// .pipe(gulp.src([
			// 	'app/scripts/plugins/layerslider.transitions.js', 
			// 	'app/scripts/plugins/layerslider.transitions.js', 
			// 	'app/scripts/plugins/layerslider.kreaturamedia.jquery.js']))
			.pipe(gulp.dest('.tmp/scripts'));
});

// TODO Need to look into browserify shim to bundle these files with the modules!
gulp.task('libs', function() {
  return gulp.src([
		//'node_modules/gsap/src/uncompressed/TweenLite.js', 
		//'node_modules/gsap/src/uncompressed/TimelineLite.js', 
		'app/scripts/plugins/greensock.js',
		'app/scripts/plugins/layerslider.transitions.js', 
		'app/scripts/plugins/layerslider.kreaturamedia.jquery.js',
		'app/scripts/plugins/responsive.accordion.jquery.js'])
    .pipe(concat('libs.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('.tmp/scripts'));
});
