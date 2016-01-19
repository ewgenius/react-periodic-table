var gulp = require('gulp');
var webpack = require('webpack-stream');
var $ = require('gulp-load-plugins')();

gulp.task('webpack', () => gulp
  .src('src/app/app.jsx')
  .pipe(webpack({
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exlude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }]
    },
    output: {
      filename: 'bundle.js'
    }
  }, null, err => console.log(err)))
  .pipe(gulp.dest('dist/js')));

gulp.task('html', () => gulp.src('src/index.html').pipe(gulp.dest('dist/')));

gulp.task('watch', () => {
  gulp.watch(['src/**/*.js', 'src/**/*.jsx'], ['webpack']);
  gulp.watch('src/index.html', ['html']);
});
