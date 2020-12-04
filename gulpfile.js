const gulp = require('gulp');
const csso = require('gulp-csso');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const image = require('gulp-image');

gulp.task('styles', function () {
  return gulp.src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(concatCss('style.css'))
    .pipe(csso())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/css/'));
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dest/js/'));
});


// gulp.task('default', function () {
//   return gulp.src('src/css/*.css')
//       .pipe(gulp.dest('dest/css/'));
// });