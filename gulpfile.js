// Global requires
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    del = require ('del'),
    twig = require('gulp-twig'),
    foreach = require('gulp-foreach'),
    ghPages = require('gulp-gh-pages'),
    sourcemaps = require('gulp-sourcemaps');

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
    },
    notify: false
  });
});

// Clean dist
gulp.task('clean:dist', function() {
  return del.sync('dist');
})

// CSS
gulp.task('css', function () {
  return gulp.src(paths.src + 'sass/main.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./', {addComment: false}))
    .pipe(gulp.dest(paths.dist + 'css'))
    .pipe(browserSync.reload({stream:true}));
});

// SASS Lint
gulp.task('sass-lint', function () {
  return gulp.src(paths.src + 'sass/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// JS Vendor
gulp.task('js-vendor', function() {
  return gulp.src(paths.src + 'js/vendor/**/*.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./', {addComment: false}))
    .pipe(gulp.dest(paths.dist + 'js'))
    .pipe(browserSync.reload({stream:true}));
});

// JS Main
gulp.task('js-main',function(){
  return gulp.src(paths.src + 'js/main.js')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('./', {addComment: false}))
    .pipe(gulp.dest(paths.dist + 'js'))
    .pipe(browserSync.reload({stream:true}));
});

// Images
gulp.task('images', function() {
  return gulp.src([
    paths.src + 'img/**/*'
  ], {
    'dot': true // include hidden files
  })
    .pipe(gulp.dest(paths.dist + 'img'))
    .pipe(browserSync.reload({stream:true}));
});

// Twig
gulp.task('twig',function(){
  return gulp.src([
    paths.src + 'templates/**/*.{twig,html}',
    '!' + paths.src + 'templates/layouts/**/*.{twig,html}',
    '!' + paths.src + 'templates/components/**/*.{twig,html}'
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

// Copy:misc
gulp.task('copy:misc', function() {
  return gulp.src([
    paths.src + '*.xml',
    paths.src + '*.txt'
  ])
    .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.reload({stream:true}));
});

// Watch
gulp.task('gulp-watch', function() {
  gulp.watch(paths.src + 'img/**/*', ['images']);
  gulp.watch(paths.src + 'sass/**/*.scss', ['css']);
  gulp.watch(paths.src + 'js/main.js', ['js-main']);
  gulp.watch(paths.src + 'js/vendor/**/*.js', ['js-vendor']);
  gulp.watch(paths.src + 'templates/**/*.{twig,html}', ['twig']);
  gulp.watch([paths.src + '*.xml', paths.src + '*.txt'], ['copy:misc']);
  gulp.watch(paths.dist + '*.html').on('change', browserSync.reload);
});

// Default
gulp.task('default', function(done) {
  runSequence('build', ['gulp-watch', 'browser-sync'], done )
});

// Build
gulp.task('build', function (done) {
  runSequence('clean:dist', ['css', 'js-vendor', 'js-main', 'images', 'twig', 'copy:misc'], done )
})

// Watch
gulp.task('watch', function(done) {
  runSequence('gulp-watch', ['browser-sync'], done )
});

// Deploy
gulp.task('deploy', function() {
  return gulp.src(paths.dist + '**/*')
    .pipe(ghPages());
});
