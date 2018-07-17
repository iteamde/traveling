var gulp = require('gulp');
var gzip = require('gulp-gzip');

gulp.task('compress', function() {
  gulp.src(['./dist/*.js', './dist/*.css', './dist/*.jpg', './dist/*.woff', './dist/*.woff2'])
    .pipe(gzip())
    .pipe(gulp.dest('./dist'));
});
