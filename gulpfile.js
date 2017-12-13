var gulp = require('gulp');
var browserSync = require('browser-sync').create();

var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var header = require('gulp-header');
var rename = require('gulp-rename');
var fileinclude = require('gulp-file-include');
var sass = require('gulp-sass');


var banner = '/* This is a generated file on ' + new Date() + '  */\n';

var sassPath = 'styles/**/*.scss';

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(header(banner))
        .pipe(sourcemaps.write())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('styles'))
        .pipe(browserSync.reload({
            stream: true
        }));

});


//We are adding sass as a gulp dependancy. It will run 'sass' before it starts the browser sync. 
//This makes sure that we have the latest CSS.
gulp.task('browserSync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: ''
        }
    })
});

//Starts up a dev server for us
//It also watches files and reloads the browser when they change.
gulp.task('dev', ['browserSync',  'sass'], function () {
    gulp.watch('**/*.html', browserSync.reload);
    gulp.watch('scripts/**/*.js', browserSync.reload);
    gulp.watch(sassPath, ['sass']);
});


gulp.task('default', ['sass']);
