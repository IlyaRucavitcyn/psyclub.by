var gulp = require('gulp');
var csslint = require('gulp-csslint');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');


gulp.task('csslint', function() {
  gulp.src('./css/*.css')
    .pipe(csslint({
      'adjoining-classes':false
    }))
    .pipe(csslint.reporter());
});


gulp.task('eslint', function () {
    return gulp.src('./js/*.js')
        .pipe(eslint())
      //   .pipe(eslint.result(function (result) {
	    // // Called for each ESLint result.
	    //       console.log('ESLint result: ' + result.filePath);
	    //       console.log('# Messages: ' + result.messages.length);
	    //       console.log('# Warnings: ' + result.warningCount);
	    //       console.log('# Errors: ' + result.errorCount);
	    //   }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('check',['eslint','csslint'], function(){});

gulp.task('concatcss', function () {
  return gulp.src('./public/css/*.css')
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('concatjs', function() {
  return gulp.src('./public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('concat',['concatcss','concatjs']);

gulp.task('cssmin', function () {
	gulp.src('./css/bundle.css')
		.pipe(cssmin())
		.pipe(gulp.dest('./css'));
});

gulp.task('jsmin', function() {
  return gulp.src('js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

gulp.task('min',['cssmin','jsmin']);

gulp.task('watch', function() {
  gulp.watch(['./css/*.css','./js/*.js'], ['eslint','concat','min']);
});

// // gulp.task('watch', function() {
// //   gulp.watch('src/css_files/*.css', ['csslint', 'concatcss']);
// // });
//
// gulp.task('deploy',['cssmin','jsmin'], function() {
//   return gulp.src('./**/*.*')
//     .pipe(ghPages())
//     // .pipe(debug({title: 'debug:'}));
// });
//
// gulp.task('default',['csslint', 'concatcss', 'jslint', 'concatjs', 'watch']);
