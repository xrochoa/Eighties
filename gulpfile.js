// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var rename = require('gulp-rename');
var minifyHTML = require('gulp-minify-html');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');


// Minify CSS
gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
});

// Copy images
gulp.task('images', function() {
    return gulp.src('img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
        .pipe(gulp.dest('dist/img'));
});

//Replacing local links with CDNs and minify index.html
gulp.task('minify-html', function() {
    return gulp.src("*.html")
        .pipe(minifyHTML())
        .pipe(gulp.dest("dist"));


});


// Default Task
gulp.task('default', ['css', 'images', 'minify-html']);