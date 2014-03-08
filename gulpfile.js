var gulp = require('gulp');

var livereload = require('gulp-livereload');
var watch = require('gulp-watch');

gulp.task('watch', function () {
  gulp.src('**/*.html')
    .pipe(watch())
    .pipe(livereload())
});

gulp.task('default', ['watch']);