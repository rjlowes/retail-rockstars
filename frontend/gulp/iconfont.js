var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var runTimestamp = Math.round(Date.now() / 1000);
 
gulp.task('iconfont', function(){
  return gulp.src(['app/svg/*.svg'])
    .pipe(iconfont({
      fontName: 'iconfont', // required 
      appendUnicode: true, // recommended option 
      formats: ['ttf', 'eot', 'woff'], // default, 'woff2' and 'svg' are available 
      timestamp: runTimestamp, // recommended to get consistent builds when watching files 
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g. 
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('app/fonts/'));
});