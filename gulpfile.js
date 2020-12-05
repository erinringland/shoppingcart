const gulp = require('gulp');
const csso = require('gulp-csso');
const concatCss = require('gulp-concat-css');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const imagemin = require('gulp-imagemin');

gulp.task('move', function () {
  return gulp.src('src/*')
      .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
  return gulp.src(['src/css/normalize.css', 'src/css/style.css', 'src/css/new.css'])
    .pipe(concatCss('style.css'))
    .pipe(sourcemaps.init())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('js', function () {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('images', function () {
  return gulp.src('src/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images/'))
});

gulp.task('default', gulp.parallel('move', 'styles', 'js', 'images'));