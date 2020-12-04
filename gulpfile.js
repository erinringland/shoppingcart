const gulp = require('gulp');
const csso = require('gulp-csso');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles', function () {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concatCss('style.css'))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/css/'));
});


// gulp.task('default', function () {
//   return gulp.src('src/css/*.css')
//       .pipe(gulp.dest('dest/css/'));
// });