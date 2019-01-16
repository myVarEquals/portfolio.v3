const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('html', () => 
    gulp.src('./src/*.html')
        .pipe(gulp.dest('dist'))
);

gulp.task('sass', () =>
    gulp.src('./src/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
);


gulp.task('babel', () =>
    gulp.src('./src/js/*.es6')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./src/js'))
);

gulp.task('uglifyJS', () =>
    gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
);

gulp.task('imagemin', () => 
    gulp.src('./src/assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
);
