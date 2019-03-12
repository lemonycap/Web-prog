
const gulp = require('gulp'),
      sass = require('gulp-sass');
      del = require('del');
      imagemin = require('imagemin');
      pngquant = require ('imagemin-pngquant');

gulp.task('sass',function() {
    return gulp.src('gulp/app/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('gulp/app/css'))
});

gulp.task('clean', async function() {

    return del.sync('gulp/dist');
   
});

gulp.task('img', function() {
    return gulp.src('gulp/app/images/**/*') 
     .pipe(imagemin({ 
      interlaced: true,
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/images')); 
});

gulp.task('watch',function() {
    gulp.watch('gulp/app/sass/*.scss', gulp.series('sass'));
});

gulp.task('build',gulp.series('clean','sass',async function() {

    var buildCss = gulp.src(['gulp/app/css/style.css'])
    .pipe(gulp.dest('gulp/dist/css'));

    var buildFonts = gulp.src('gulp/app/fonts/**/*')
    .pipe(gulp.dest('gulp/dist/fonts'));

    var buildJS = gulp.src('gulp/app/js/**/*')
    .pipe(gulp.dest('gulp/dist/js'));

    var buildHtml = gulp.src('gulp/app/*.html')
    .pipe(gulp.dest('gulp/dist'));

}));