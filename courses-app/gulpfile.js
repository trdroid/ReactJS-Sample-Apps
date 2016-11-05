"use strict";

var gulp = require('gulp');

var config = {
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

gulp.task('html', function() {
  gulp.src(config.paths.html)
      .pipe(gulp.dest(config.paths.dist))
})

gulp.task('default', ['html']);
