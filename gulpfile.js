// Global requires
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    del = require ('del'),
    twig = require('gulp-twig'),
    foreach = require('gulp-foreach');

// Paths
var paths = {
  dist: 'dist/',
  src: 'src/'
};

// Catch stream errors
var onError = function (err) {
  notify.onError({
    title: "Gulp error in " + err.plugin,
    message: err.toString()
  })(err);
};

// Browser Sync
gulp.task('browser-sync', function() {
  browserSync.init(null, {
    server: {
      baseDir: './dist'
    }
  });
});
gulp.task('bs-reload', function () {
  browserSync.reload();
});

// Clean dist
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// CSS
gulp.task('css', function () {
  return gulp.src(paths.src + 'sass/main.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass())
    .pipe(autoprefixer('last 2 version'))
    .pipe(clean())
    .pipe(gulp.dest(paths.dist + 'css'));
});
gulp.task('css-watch',['css'],browserSync.reload)

// JS Vendor
gulp.task('js-vendor', function() {
  return gulp.src(paths.src + 'js/vendor/**/*.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + 'js'));
});
gulp.task('js-vendor-watch',['js-vendor'],browserSync.reload)

// JS Main
gulp.task('js-main',function(){
  return gulp.src(paths.src + 'js/main.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + 'js'));
});
gulp.task('js-main-watch',['js-main'],browserSync.reload)

// HTML
gulp.task('html', function() {
  return gulp.src(paths.src + '*.html')
    .pipe(gulp.dest(paths.dist))
});
gulp.task('html-watch',['html'],browserSync.reload)

// Images
gulp.task('images', function() {
  return gulp.src([
    paths.src + 'img/**/*'
  ], {
    'dot': true // include hidden files
  })
    .pipe(gulp.dest(paths.dist + 'img'));
});
gulp.task('images-watch',['images'],browserSync.reload)

// Twig
gulp.task('twig',function(){
  return gulp.src([
    paths.src + 'templates/**/*.twig',
    '!' + paths.src + 'templates/layouts/**/*.twig',
    '!' + paths.src + 'templates/partials/**/*.twig'
  ])
  .pipe(plumber({
    errorHandler: function (error) {
      console.log(error.message);
      this.emit('end');
  }}))
  .pipe(foreach(function(stream,file){
    return stream
      .pipe(twig({}))
  }))
  .pipe(gulp.dest(paths.dist));
});
gulp.task('twig-watch',['twig'],browserSync.reload);

// Watch
gulp.task('gulp-watch', function() {
  gulp.watch(paths.src + '*.html', ['html-watch']);
  gulp.watch(paths.src + 'img/**/*', ['images-watch']);
  gulp.watch(paths.src + 'sass/**/*.scss', ['css-watch']);
  gulp.watch(paths.src + 'js/main.js', ['js-main-watch']);
  gulp.watch(paths.src + 'js/vendor/**/*.js', ['js-vendor-watch']);
  gulp.watch(paths.src + 'templates/**/*.twig', ['twig-watch']);
});

// Default
gulp.task('default', function(done) {
  runSequence('build',
    ['gulp-watch', 'browser-sync'],
    done
  )
});

// Build
gulp.task('build', function (done) {
  runSequence('clean:dist',
    ['css', 'js-vendor', 'js-main', 'images', 'twig', 'html'],
    done
  )
})

// Watch
gulp.task('watch', function(done) {
  runSequence('gulp-watch',
    ['browser-sync'],
    done
  )
});
