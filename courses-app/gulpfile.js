"use strict";

var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var gulpOpen = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var vinylSourceStream = require('vinyl-source-stream');
var gulpEslint = require('gulp-eslint');
var gulpConcat = require('gulp-concat');

var config = {
  dev: {
    port: 8999,
    baseUrl: 'http://localhost',
  },
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ],
    imgs: './src/imgs/*',
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
      .pipe(gulpConnect.reload());
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
      .pipe(gulpConcat('bundle.css'))
      .pipe(gulp.dest(config.paths.dist + '/css'));
})

gulp.task('images', function() {
  gulp.src(config.paths.imgs)
      .pipe(gulp.dest(config.paths.dist + '/imgs'))
      .pipe(gulpConnect.reload());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
      .pipe(gulpEslint('eslint.config.json'))
      .pipe(gulpEslint.format());
})

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
  gulp.watch(config.paths.imgs, ['images']);
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
      .pipe(gulpOpen({ uri: config.dev.baseUrl + ':' + config.dev.port + '/'}));
});

gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']);
