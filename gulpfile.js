var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

// Compile Sass files
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass({
        includePaths: ['scss'],
        onError: browserSync.notify
    }))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('css'));
});

// Serve files
gulp.task('browser-sync', ['sass'], function() {
  browserSync({
    server: {
        baseDir: '/'
    }
  });
});

// Watch
gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch(['*.html']);
});