'use strict';

var gulp = require('gulp');
var _ = require('lodash');
var del = require('del');
var defaultAssets = require('./server/config/assets/default');
var runSequence = require('run-sequence');
var nodemon = require('gulp-nodemon');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
  rename: {
    'gulp-angular-templatecache': 'templateCache'
  }
});


gulp.task('clean', function () {
  return del([
    'client/dist/**/*'
  ]);
});
gulp.task('css', function () {
  gulp.src(defaultAssets.client.css)
    .pipe(gulp.dest('client/dist/'));
});
gulp.task('sass', function () {
  return gulp.src(defaultAssets.client.sass)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest('client/app/css/'));
});
gulp.task('js', function () {
  gulp.src(defaultAssets.client.js)
    .pipe(gulp.dest('client/dist/'));
});
gulp.task('bower-components', function () {
  gulp.src(defaultAssets.client.lib.all)
    .pipe(gulp.dest('client/dist/bower_components'));
});
gulp.task('html', function () {
  gulp.src(defaultAssets.client.views)
    .pipe(gulp.dest('client/dist/'));
});

gulp.task('watch', function () {
  plugins.refresh.listen();

  // gulp.watch(defaultAssets.server.views).on('change', plugins.refresh.changed);
  // gulp.watch(defaultAssets.server.allJS, ['js']).on('change', plugins.refresh.changed);
  gulp.watch(defaultAssets.client.views, ['html']).on('change', plugins.refresh.changed);
  gulp.watch(defaultAssets.client.js, ['js']).on('change', plugins.refresh.changed);
  gulp.watch(defaultAssets.client.css, ['css']).on('change', plugins.refresh.changed);
  gulp.watch(defaultAssets.client.sass, ['sass']).on('change', plugins.refresh.changed);
  gulp.watch(defaultAssets.client.less, ['less', 'csslint']).on('change', plugins.refresh.changed);
});

gulp.task('restart', ['reboot'], function () {
  var stream = nodemon({
    script: './server/app.js',
    nodeArgs: ['--debug'],
    ext: 'js,html',
    verbose: true
  });

  stream.on('restart', function () {
    console.log('restarted!');
  }).on('crash', function () {
    console.error('Application has crashed!\n');
    stream.emit('restart', 10);
  });
});


gulp.task('nodemon', function () {
  return plugins.nodemon({
    script: 'server/app.js',
    nodeArgs: ['--debug'],
    ext: 'js,html',
    verbose: true,
    watch: _.union(defaultAssets.server.views, defaultAssets.server.allJS, defaultAssets.server.config)
  });
});

gulp.task('default', function (done) {
  runSequence(['nodemon', 'watch', 'reboot'], done);
});

gulp.task('reboot', function () {
  runSequence('clean', 'sass', 'css', 'js', 'html', 'bower-components');
});
