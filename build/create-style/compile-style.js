const path = require('path');
const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const gulpLess = require('gulp-less');
const csso = require('gulp-csso');
const postcss = require('gulp-postcss');

// compile component css
gulp.task('compile-less', () => (
  gulp
    .src([path.resolve('./es/**/*.less'), path.resolve('./lib/**/*.less')])
    .pipe(gulpLess({
      paths: [path.resolve(__dirname, 'node_modules')]
    }))
    .pipe(postcss())
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')))
));

// compile component css
gulp.task('compile-scss', () => (
  gulp
    .src([path.resolve('./es/**/*.scss'), path.resolve('./lib/**/*.scss')])
    .pipe(gulpSass({
      paths: [path.resolve(__dirname, 'node_modules')]
    }))
    .pipe(postcss())
    .pipe(csso())
    .pipe(gulp.dest(file => file.base.replace('.less', '.css')))
));

gulp.task('default', ['compile-less', 'compile-scss']);
