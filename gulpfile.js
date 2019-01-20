const { series, src, dest, watch } = require('gulp');
// const imagemin = require('gulp-imagemin');
const gulpSass = require('gulp-sass');
gulpSass.compiler = require('node-sass');
// const uglify = require('gulp-uglify');
// const babel = require('gulp-babel');
// //const watch = require('gulp-watch');

// HTML
function html(cb) {
    src('./src/*.html')
        .pipe(dest('dist'))
    cb();
}
// Deprecated HTML
// gulp.task('html', () => 
//     gulp.src('./src/*.html')
//         .pipe(gulp.dest('dist'))
// );

// Sass
function sass(cb) {
    src('.src/sass/*')
        .pipe(gulpSass())
        .pipe(dest('./dist/css'))
    cb();
}

// gulp.task('sass', () =>
//     gulp.src('./src/sass/*.sass')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./dist/css'))
// );


// gulp.task('babel', () =>
//     gulp.src('./src/js/*.es6')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(gulp.dest('./src/js'))
// );

// gulp.task('uglifyJS', () =>
//     gulp.src('./src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'))
// );

// gulp.task('imagemin', () => 
//     gulp.src('./src/assets/images/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('./dist/assets/images'))
// );

// gulp.task('watch', function() {
//         gulp.watch('./src/*.html', ['html']);
//         gulp.watch('./src/sass/*.sass', ['sass']);
//         gulp.watch('./src/js/*.es6', ['babel', 'uglifyJS']);
//         gulp.watch('./src/assets/images/*', ['imagemin']);
// });

exports.default = series(html, sass);
