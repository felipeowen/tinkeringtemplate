var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('build-less', function(){
    return gulp.src('./node_modules/bootstrap/less/bootstrap.less')
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});