var gulp            = require('gulp');
var imagemin        = require('gulp-imagemin');
var pump            = require('pump');
var uglify          = require('gulp-uglify');
var autoprefixer    = require('gulp-autoprefixer');
var del             = require('del');
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');

// Delete the dist folder
gulp.task('clean:dist', function() {
    return del(['../dist'], {force: true});
});

// Compress css and copy to dist for production
gulp.task('dev-sass-build', function(){
    return gulp.src("_scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("_site/css"))
    .pipe(gulp.dest("css"))
    .pipe(gulp.dest('../dist/css'))
});

// Compress images and copy to dist for production
gulp.task('dev-tiny-images', function(){
    return gulp.src('images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('../dist/images'))
});

// Fonts are already compressed - so let's just copy to dist for production
gulp.task('dev-fonts', function() {
    return gulp.src('fonts/**/*')
    .pipe(gulp.dest('../dist/fonts'))
});

// Icons - copy to dist for production
gulp.task('dev-icons', function() {
    return gulp.src('icons/**/*')
    .pipe(gulp.dest('../dist/icons'))
});

// JS compress - and copy to dist for production
gulp.task('dev-js-compress', function (callback) {
  pump([
        gulp.src('js/main.js'),
        gulp.dest('../dist/js')
    ],
    callback
  );
});
