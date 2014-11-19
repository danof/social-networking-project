var gulp = require('gulp')

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server'])

var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
})
