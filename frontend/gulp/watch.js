var gulp = require('gulp');


gulp.task('watch', function () {
    gulp.watch('app/styles/**/*.scss', ['sass']);
    gulp.watch('app/scripts/**/*.js', ['scripts']);
});