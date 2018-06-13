var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function() {
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('js'));
});
gulp.task('watch', function() {
  gulp.watch('ts/*.ts', ['typescript']);
});
gulp.task('default', ['watch']);
