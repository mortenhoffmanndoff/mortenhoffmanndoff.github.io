var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();

// Static Server + watchingfiles
gulp.task('serve', ['sass', 'scripts'] , function() {

    browserSync.init({
        reloadDelay: 300,
        server: "_site"
    });

    gulp.watch("_scss/**/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
    gulp.watch("_pages/*.md").on('change', browserSync.reload);
    gulp.watch("_data/*.yml").on('change', browserSync.reload);
    gulp.watch("js/**/*.js", ['scripts']).on('change', browserSync.reload);
});
