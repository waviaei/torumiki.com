'user strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

gulp.task('precss', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/'))
});

gulp.task('postcss', function() {
  return gulp.src('./src/*.css')
  .pipe(postcss([
    require('autoprefixer')({ browsers: ['last 1 versions'] }),
    require('cssnano')
  ]))
  .pipe(gulp.dest('.'))
});
