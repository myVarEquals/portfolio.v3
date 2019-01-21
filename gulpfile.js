const { series, src, dest, watch } = require('gulp');
const gulpImagemin = require('gulp-imagemin');
const gulpSass = require('gulp-sass');
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
    src('./src/sass/*')
        .pipe(gulpSass())
        .pipe(dest('./dist/css'));    
            
    browserSync.reload();
    done();
}
// Babel
const babel = (done) => {
    src('./src/js/*.es6')
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

function watching() {

    browserSync.init({
        browser: "chrome",
        watch: true,
        server: "./dist"      

    });

    watch(['./src/*.html'], html);
    watch(['./src/sass/*.sass'], sass);
    watch(['./src/js/*.es6'], babel);
    watch(['./src/assets/images/*'], imagemin);
    
}

exports.default = watching;


