const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('sass');

gulp.task('sass', () => { 
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss']) // bootstrap and sass
        .pipe(sass())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});