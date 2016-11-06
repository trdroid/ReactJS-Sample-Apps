"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('connect', function() {
  gulpConnect.server({
    root: [config.paths.dist],
    port: config.dev.port,
    livereload: true
  });
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
      .pipe(gulpConnect.reload());
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'open', 'watch']);
