var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

var minifyHTML = require('gulp-minify-html');


var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

 
gulp.task('minify-html', function() {
  var opts = {
    conditionals: true,
    spare:true
  };
  return gulp.src('./view/**/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('./docs/'))
    .pipe(gulp.dest('./product/'));
});

gulp.task('scripts', function() {
  gulp.src(['./js/**/*.js'])
  .pipe(sourcemaps.init())
  .pipe(sourcemaps.write())
  .pipe(uglify())
  .pipe(gulp.dest('./docs/js/'))
  .pipe(gulp.dest('./product/js/'));
});

gulp.task('scss', function() {
  return gulp.src(['./scss/**/*.scss', './scss/**/*.css'])
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers:  AUTOPREFIXER_BROWSERS,
    cascade: false
  }))
  .pipe(minifyCSS())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest('./docs/css/'))
  .pipe(gulp.dest('./product/css/'));  // TODO: inline-css
});

gulp.task('watch', function () {
  gulp.watch(['./js/**/*.js'], ['scripts']);
  gulp.watch(['./scss/**/*.scss', './scss/**/*.css'], ['scss']);
  gulp.watch(['./images/**/*.jpg', './images/**/*.png', './images/**/*.gif', './images/**/*.mp4'], ['image'])
});

gulp.task('image', function () {
	return gulp.src(['./images/**/*.jpg', './images/**/*.png', './images/**/*.gif', './images/**/*.mp4'])
	.pipe(gulp.dest('./docs/images/'))
	.pipe(gulp.dest('./product/images/')); // TODO: inline-js
});

gulp.task('font', function () {
  return gulp.src(['./font/**/*'])
  .pipe(gulp.dest('./docs/font/'))
  .pipe(gulp.dest('./product/font/'));
})

gulp.task('ref', function () {
  return gulp.src(['./ref/**/*'])
  .pipe(gulp.dest('./docs/ref/'))
  .pipe(gulp.dest('./product/ref/'));
})

gulp.task('default', ['scripts',  'scss', 'image', 'font', 'ref', 'watch']);
