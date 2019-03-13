const { series, src, dest, watch } = require('gulp');
const gulpImagemin = require('gulp-imagemin');
const gulpSass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
gulpSass.compiler = require('node-sass');
const uglify = require('gulp-uglify');
const gulpBabel = require('gulp-babel');
const browserSync = require('browser-sync').create();

// HTML
const html = (done) => {
    src('./src/*.html')
        .pipe(dest('dist'));
        
    browserSync.reload();
    done();
};

// Sass
const sass = (done) => {
    src(['node_modules/bootstrap/dist/css/bootstrap.min.css','./src/scss/*'])
        .pipe(gulpSass())
        .pipe(cleanCSS())
        .pipe(dest('./dist/css'));    
            
    browserSync.reload();
    done();
}
// Babel
const babel = (done) => {
    src(['./src/js/*.es6'])
        .pipe(gulpBabel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./dist/js'));
        
    browserSync.reload();
    done();
}
// Image Minify
const imagemin = (done) => {
    src('./src/assets/images/*')
        .pipe(gulpImagemin())
        .pipe(dest('./dist/assets/images'));
            
    browserSync.reload();
    done();
}

const bootstrap = (done) => {
    src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/jquery/dist/jquery.slim.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(dest('./dist/js'));
    done();
}

function watching() {

    browserSync.init({
        browser: "chrome",
        watch: true,
        server: "./dist"
    });

    watch(['./src/*.html'], html);
    watch(['./src/scss/*.scss'], sass);
    watch(['./src/js/*.es6'], babel);
    watch(['./src/assets/images/*'], imagemin);
    
}

exports.default = series(bootstrap, watching);


