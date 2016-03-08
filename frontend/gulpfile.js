'use strict';

var gulp = require('gulp'),
    rd = require('require-dir');

gulp.paths = {
    app: 'app',
    src: 'src',
    dist: 'dist',
    tmp: '.tmp'
};

// Pull in all the gulp config files
rd('./gulp');


gulp.task('default', ['server', 'watch']);

gulp.task('build', ['sass']);
