'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const injectComponents = require('gulp-inject-partials');
const htmlmin = require('gulp-htmlmin');
const stripComments = require('gulp-strip-comments');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const scriptsConcat = require('gulp-concat');
const uglify = require('gulp-uglify');

sass.compiler = require('dart-sass');

const javascriptFiles = [
  // Bibliotecas
  './node_modules/jquery/dist/jquery.min.js',
  './node_modules/owl.carousel/dist/owl.carousel.min.js',
  // Métodos
  './src/scripts/methods/controller.js',
  './src/scripts/methods/injectHTML.js',
  // Base de dados
  './array-products.json',
  './src/scripts/env.js',
  // Componentes
  './src/scripts/mainMenu/mainMenu.js',
  './src/scripts/carousel/mainBanner.js',
  './src/scripts/carousel/promotions.js',
  './src/scripts/carousel/discountShelf.js',
  './src/scripts/discountShelf/discountShelf.js',
  './src/scripts/modal/productView.js',
  './src/scripts/carousel/productView.js',
  './src/scripts/footer/footer.js',
  // Funcionalidades
  './src/scripts/modal/openModal.js',
  './src/scripts/popup/successfulPruchase.js',
];

const _compilerAndMinify = {
  // Injetor de componentes HTML
  htmlComponents() {
    return gulp
      .src('./src/components/index.html')
      .pipe(injectComponents())
      .pipe(stripComments())
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('./build'));
  },

  // Compilação e minificação dos arquivos .scss
  scssCompiler() {
    return gulp
      .src('./src/scss/styles.scss')
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(autoprefixer())
      .pipe(gulp.dest('build/css'));
  },

  // Compilação e minificação dos arquivos .js
  jsConcat() {
    return gulp
      .src(javascriptFiles)
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        })
      )
      .pipe(scriptsConcat('scripts.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./build/js'));
  },
};

const _compiler = {
  // Injetor de componentes HTML
  htmlComponents() {
    return gulp
      .src('./src/components/index.html')
      .pipe(injectComponents())
      .pipe(gulp.dest('./src'));
  },

  // Compilação e minificação dos arquivos .scss
  scssCompiler() {
    return gulp
      .src('./src/scss/styles.scss')
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('src/css'));
  },

  // Compilação e minificação dos arquivos .js
  jsConcat() {
    return gulp
      .src(javascriptFiles)
      .pipe(
        babel({
          presets: ['@babel/preset-env'],
        })
      )
      .pipe(scriptsConcat('scripts.js'))
      .pipe(gulp.dest('./src/js'));
  },
};

// Compilar
gulp.task('dev', watch);
gulp.task('scss', _compiler.scssCompiler);
gulp.task('scripts', _compiler.jsConcat);
gulp.task('components', _compiler.htmlComponents);
gulp.task('compiler', gulp.series('scss', 'scripts', 'components', 'dev'));

// Compilar e minificar
gulp.task('scss-minify', _compilerAndMinify.scssCompiler);
gulp.task('scripts-minify', _compilerAndMinify.jsConcat);
gulp.task('components-minify', _compilerAndMinify.htmlComponents);
gulp.task(
  'build',
  gulp.series('scss-minify', 'scripts-minify', 'components-minify')
);

// Auto-conpilação
function watch() {
  gulp.watch('src/components/**/*.html', _compiler.htmlComponents);
  gulp.watch('src/scss/**/*.scss', _compiler.scssCompiler);
  gulp.watch(
    ['src/scripts/**/*.js', 'array-products.json'],
    _compiler.jsConcat
  );
}
