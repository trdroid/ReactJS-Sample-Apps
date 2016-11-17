"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    dist: './dist',
    appJs: './src/app.js'
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

gulp.task('js', function() {
  browserify(config.paths.appJs)
      .transform(reactify)
      .bundle()
      .on('error', console.error.bind(console))
      .pipe(vinylSourceStream('bundle.js'))
      .pipe(gulp.dest(config.paths.dist + '/scripts'))
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js']);
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'js', 'open', 'watch']);
