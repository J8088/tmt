'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
    return del([
        'dist/**/*'
    ]);
});
gulp.task('css', function () {
    gulp.src(['./app/**/*.css'])
        .pipe(gulp.dest('./dist/'));
});
gulp.task('js', function () {
    gulp.src(['./app/*.js', './app/**/*.js'])
        .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-bower-components', function () {
    gulp.src('./app/bower_components/**')
        .pipe(gulp.dest('dist/bower_components'));
});
gulp.task('copy-html-files', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function () {
    runSequence('clean', 'css', 'js', 'copy-html-files', 'copy-bower-components');
});

gulp.watch([
    './app/**/*.css',
    './app/*.js',
    './app/**/*.js',
    './app/bower_components/**',
    './app/**/*.html'
], function(event) {
    runSequence('css', 'js', 'copy-html-files', function(data, err){
        console.log('Ready...');
    });
});