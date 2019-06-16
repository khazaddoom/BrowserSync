var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch');

gulp.task('watch', function() {

    browserSync.init({
        // notify: false,
        server: {
            baseDir: 'app'
        }
    });

    watch(['./app/*.*'], function() {
        browserSync.reload();
    });

});