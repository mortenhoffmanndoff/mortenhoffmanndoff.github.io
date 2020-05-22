var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var imagemin        = require('gulp-imagemin');
var uglify          = require('gulp-uglify');
var pump            = require('pump');
var prettyError     = require('gulp-prettyerror');
var del             = require('del');
var runSequence     = require('run-sequence');
var concat          = require('gulp-concat');
var requireDir      = require('require-dir');
var sourcemaps      = require('gulp-sourcemaps');

var dir = requireDir('./gulp-tasks');

// PREVIEW - template preview!
gulp.task('preview', function() {
    browserSync.init({
        server: "_site"
    });
});

// GULP - Run and watch
gulp.task('default', ['serve']);


// BUILD DEV
gulp.task('build-dev', ['serve'], function (callback) {
  runSequence('clean:dist',
    ['dev-sass-build', 'dev-js-compress', 'dev-tiny-images', 'dev-fonts', 'dev-icons'],
    callback
  )
})

// BUILD PROD
gulp.task('build-prod', ['serve'], function (callback) {
  runSequence('clean:dist',
    ['sass-build', 'js-compress', 'tiny-images', 'fonts', 'icons'],
    callback
  )
})
