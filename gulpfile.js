var gulp = require('gulp');
var webpack = require('webpack-stream');
var $ = require('gulp-load-plugins')();

gulp.task('webpack', () => {
  gulp
    .src('src/app/app.jsx')
    .pipe(webpack({
      module: {
        loaders: [{
          test: /\.jsx$/,
          exlude: /node_modules/,
          loader: 'babel-loader'
        }]
      },
      output: {
        filename: 'bundle.js'
      }
    }, null, err => console.log(err)))
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', () => {});
