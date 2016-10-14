var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev');

//jshint
gulp.task('jshint', function () {
    return gulp.src('src/particleScene.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

// clean
gulp.task('clean', function () {
    return del(['dist']);
});

//usemin
gulp.task('usemin', function() {
    return gulp.src('src/**/*.html')
    .pipe(usemin({
        css: [rev()],
        js: [uglify(),rev()]
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('usemin2', ['clean','jshint'], function(){
    return gulp.src('src/index.html')
    .pipe(usemin({
        css: [rev()],
        js: [uglify(),rev()]
    }))
    .pipe(gulp.dest('dist/'));
});