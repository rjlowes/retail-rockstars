'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    proxyMiddleware = require('http-proxy-middleware'),
    proxy = proxyMiddleware('/api', {target: 'http://localhost:8080'}),
    paths = gulp.paths;


gulp.task('server', function () {

    browserSync.init({

        // Control panel
        ui: {
            port: 9999
        },

        //startPath: '/',

        // Watched files
        // http://www.browsersync.io/docs/options/#option-files
        files: [
            // TODO globbing
            'app/*.html',
            'app/views/**/*.html',
            'app/views/**/**/*.html',
            'app/scripts/**/*.js',
            '.tmp/styles/*.css'
            // Old - to delete
            // paths.tmp + '/serve/{app,components}/**/*.css',
            // paths.src + '/{app,components}/**/*.js',
            // paths.src + 'src/assets/images/**/*',
            // 'app/*.html',
            // //'.tmp/scripts/*.js',
            // paths.tmp + '/serve/{app,components}/**/*.html',
            // paths.src + '/{app,components}/**/*.html'
        ],

        // Use the static server
        // http://www.browsersync.io/docs/options/#option-server
        server: {
            baseDir: ['./app', './.tmp'],
            routes: {
                "/bower_components": "bower_components"
            },
            middleware: [proxy],
            port: 3000,
            open: true
        }
    });
});
