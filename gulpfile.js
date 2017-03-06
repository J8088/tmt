'use strict';

var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');


gulp.task('clean', function () {
  return del([
    'jb-client/dist/**/*'
  ]);
});
gulp.task('css', function() {
  gulp.src(['./jb-client/app/**/*.css'])
    .pipe(gulp.dest('./jb-client/dist/'));
});
gulp.task('js', function() {
  gulp.src(['./jb-client/app/*.js', './jb-client/app/**/*.js'])
    .pipe(gulp.dest('./jb-client/dist/'));
});
gulp.task('copy-bower-components', function () {
  gulp.src('./jb-client/app/bower_components/**')
    .pipe(gulp.dest('jb-client/dist/bower_components'));
});
gulp.task('copy-html-files', function () {
  gulp.src('./jb-client/app/**/*.html')
    .pipe(gulp.dest('jb-client/dist/'));
});

gulp.task('start', ['serve'], function () {
  var stream = nodemon({ script: './jb-server/app.js'});

  stream.on('restart', function () {
      console.log('restarted!');
    }).on('crash', function() {
      console.error('Application has crashed!\n');
      stream.emit('restart', 10);
    });
});


gulp.task('serve', function() {
   runSequence('clean','css', 'js', 'copy-html-files', 'copy-bower-components');
});