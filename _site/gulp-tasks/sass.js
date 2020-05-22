var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');
var pump            = require('pump');
var prettyError     = require('gulp-prettyerror');
var sourcemaps      = require('gulp-sourcemaps');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("_scss/**/*.scss")
    .pipe(prettyError())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("_site/css"))
    .pipe(gulp.dest("css"))
    .pipe(gulp.dest("../dist/css"))
    .pipe(browserSync.stream());
});
