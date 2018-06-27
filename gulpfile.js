const gulp = require('gulp');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  watch('./**', () => {
    browserSync.reload();
  });
});

gulp.task('serve', ['watch'], () => {
  browserSync.init({
    open: true,
    ghostMode: false,
    server: {
      baseDir: './',
    },
  });
});

gulp.task('default', ['serve']);
