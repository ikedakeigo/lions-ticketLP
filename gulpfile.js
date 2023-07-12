const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const autoprefixerOptions = {
  overrideBrowserslist: ['last 2 versions'],
  cascade: false
};

gulp.task('sass', function () {
  return gulp.src('./assets/sass/*.scss') // パスを修正
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write('.',{
      includeContent: false,
      sourceRoot: './assets/sass'
    }))
    .pipe(gulp.dest('./assets/css')) // パスを修正
    .pipe(browserSync.stream());
});

gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./**/*.html').on('change', browserSync.reload);
  gulp.watch('./**/*.css').on('change', browserSync.reload);
  gulp.watch('./**/*.js').on('change', browserSync.reload);

  gulp.watch('./assets/sass/*.scss', gulp.series('sass'));
});


gulp.task('default', gulp.series('sass', 'serve'));
