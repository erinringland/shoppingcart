const gulp = require('gulp');
const csso = require('gulp-csso');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

gulp.task('move', function () {
  return gulp.src('src/*')
      .pipe(gulp.dest('dest/'));
});

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

gulp.task('images', function () {
  return gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dest/images/'))
});

// exports.build = series(javascript, css);
