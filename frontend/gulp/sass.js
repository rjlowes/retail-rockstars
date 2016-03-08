var gulp = require('gulp'),
    sass = require('gulp-sass'),
    $ = require('gulp-load-plugins')();


gulp.task('sass', function () {
    return gulp.src('./app/styles/**/*.scss')
               .pipe($.sass().on('error', $.sass.logError))
               .pipe(gulp.dest('./.tmp/styles'));
});
