var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');
var sass = require('gulp-sass');

gulp.task('images', function(){
    gulp.src('src/img/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('styles', function(){
    gulp.src(['src/scss/**/*.scss'])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(sass({
            includePaths: ['node_modules/susy/sass']
        }))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('scripts', function(){
    return gulp.src('src/js/**/*.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

gulp.task('default', function(){
    gulp.watch("src/scss/**/*.scss", ['styles']);
    gulp.watch("src/js/**/*.js", ['scripts']);
});