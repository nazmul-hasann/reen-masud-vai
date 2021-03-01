const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', ()=>
    gulp.src(['src/scss/style.scss']) // This path belong to main style.SCSS file
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/assets/css')) // Path where the CSS file will be generated
);

gulp.task('sassWatch', function () {
    gulp.watch(['src/scss/*.scss', 'src/scss/**/*.scss'], gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'sassWatch'));