var gulp            = require('gulp');
var concat          = require('gulp-concat');
var sourcemaps      = require('gulp-sourcemaps');

// Collect custom.js and vendor.js in one file - main.js
gulp.task('concate-js', function() {
  return gulp.src([
      "js/vendor/jquery/*.js",
      "js/vendor/jquery-vendor/*.js",
      "js/vendor/lib/*.js",
      "js/vendor/*.js",
      "js/custom/*.js"
    ])
    .pipe(sourcemaps.init())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("js"))
    .pipe(gulp.dest("../dist/js"))
});

gulp.task('scripts', ['concate-js']);
