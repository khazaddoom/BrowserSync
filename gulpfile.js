var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');

gulp.task('default', ['watch']);

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: 'app'
        }
    });

    gulp.watch(['app/*.html', 'app/*.css'], function() {
        browserSync.reload();
    });

})