var gulp            = require('gulp');
var imagemin        = require('gulp-imagemin');
var pump            = require('pump');
var uglify          = require('gulp-uglify');
var del             = require('del');
var sass            = require('gulp-sass');

// Delete the dist folder
gulp.task('clean:dist', function() {
    return del(['../dist'], {force: true});
});

// Compress css and copy to dist for production
gulp.task('sass-build', function(){
    return gulp.src("_scss/**/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('../dist/css'))
});

// Compress images and copy to dist for production
gulp.task('tiny-images', function(){
    return gulp.src('images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin())
    .pipe(gulp.dest('../dist/images'))
});

// Fonts are already compressed - so let's just copy to dist for production
gulp.task('fonts', function() {
    return gulp.src('fonts/**/*')
    .pipe(gulp.dest('../dist/fonts'))
});

// Icons - copy to dist for production
gulp.task('icons', function() {
    return gulp.src('icons/**/*')
    .pipe(gulp.dest('../dist/icons'))
});

// JS compress - and copy to dist for production
gulp.task('js-compress', function (callback) {
  pump([
        gulp.src('js/main.js'),
        uglify(),
        gulp.dest('../dist/js')
    ],
    callback
  );
});
