const { series, src, dest, watch } = require('gulp');
const gulpImagemin = require('gulp-imagemin');
const gulpSass = require('gulp-sass');
gulpSass.compiler = require('node-sass');
const uglify = require('gulp-uglify');
const gulpBabel = require('gulp-babel');

// HTML
const html = () => (
    src('./src/*.html')
        .pipe(dest('dist'))
);

// Sass
const sass = () => (
    src('./src/sass/*')
        .pipe(gulpSass())
        .pipe(dest('./dist/css'))
 );
// Babel
const babel = () => (
    src('./src/js/*.es6')
        .pipe(gulpBabel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
);
// Image Minify
const imagemin = () => (
    src('./src/assets/images/*')
        .pipe(gulpImagemin())
        .pipe(dest('./dist/assets/images'))
);

function watching() {
    watch(['./src/*.html'], html);
    watch(['./src/sass/*.sass'], sass);
    watch(['./src/js/*.es6'], babel);
    watch(['./src/assets/images/*'], imagemin);
}

// exports.default = series(html, sass, babel, imagemin);
exports.default = series(watching);


