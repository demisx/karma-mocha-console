require('coffee-script/register');

var gulp = require('gulp'),
  karma = require('karma').server

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/karma-unit.conf.js',
    singleRun: true
  }, done);
});
