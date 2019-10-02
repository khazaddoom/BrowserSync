var gulp = require('gulp'),
browserSync = require('browser-sync').create(),
watch = require('gulp-watch'),
autoprefixer = require('gulp-autoprefixer');


gulp.task('watch', function() {

    browserSync.init({
        // notify: false,
        server: {
            baseDir: 'app'
        }
    });

    watch(['./app/*.*'], function() {

        vendorPrefix();
        browserSync.reload();
    });

});

function vendorPrefix() {
    return gulp.src('app/style.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('app/dist'))
}