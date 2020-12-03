require('dotenv').config();
const { src, dest, series, parallel, watch } = require('gulp');
const bs = require('browser-sync');
const pump = require('pump');

const fs = require('fs');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const babelify = require('babelify');
const browserify = require('browserify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');
const del = require('del');
const imagemin = require('gulp-imagemin');


function browserSync(){
  return (
    bs.init({
      server: {
        baseDir: 'src',
      },
      notify: false,
      scrollProportionally: false,
    })
  )
}

function style(cb) {

  return pump([
    src('src/scss/style.scss'),
    sourcemaps.init(),
    sass({outputStyle: 'compressed'}).on('error',sass.logError),
    autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false,
      grid: true
    }),
    rename({suffix: '.min'}),
    sourcemaps.write('./sourcemap'),
    dest('src/css')
 ])
}

function script() {
 let jsFile = fs.readdirSync('src/js/dev');
 
  return pump([
    browserify({
      entries: jsFile,
      basedir: "src/js/dev",
      debug: true,
    })
    .transform(babelify, {
      presets: ['@babel/preset-env'],
    })
    .bundle((err)=>{
      console.error(`ERROR >> ${err}`);
      this.emit('end');//Выкидывает ошибку this.emit is not a function, но не закрывает теперь сервер
    }),
    source('bundle.min.js'),
    buffer(),
    sourcemaps.init({
      loadMaps: true,
    }),
    uglify(),
    sourcemaps.write('./sourcemap'),
    dest('src/js'),
  ])

}

function build(){
  
  return (
    src([
      'src/css/style.min.css',
      'src/fonts/**/*',
      'src/js/bundle.min.js',
      'src/*.html',
    ], {base: 'src'})
    .pipe(dest('dist'))
  )
}

function images(){
  return pump([
    src('src/img/**/*', { base: 'src' }),
    imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: false},
              {cleanupIDs: false}
          ]
      })
    ]),
    dest('dist')
  ])
}

function watching() {
  watch('**/*.scss', style).on('change', bs.reload);
  watch('src/js/dev/*.js', script).on('change', bs.reload)
  watch('src/*.html').on('change', bs.reload)
};



exports.images = images;
exports.style = style;
exports.script = script;

exports.build = series(()=>del('dist'), build, images);
exports.default = parallel( style, script, browserSync, watching )


/*
######-------<{ Вступление }>--------######
*Старый task метод регистрации событий ещё работает, но лучше начинать использовать export
1. src(), dest(), series(), parallel() методы для удобства написанные на NODEJS. библиотеки NODEJS можно использовать по полной.
2. Можно использовать синтаксис ES 6 import, export только файл переименовать в  
3. Все методы должны быть async (на новый лад, на старый функцию саму себя внутри себя вызвать в конце). 
gulp выполняет события через консоль. gulp "Имя события". В 4й версии gulp имя события определяется через
export.method1 = задача;   ->  gulp method1
exports.default = задача   ->  gulp  (просто gulp отвечает за default задачи)

exports.default = series(задача1, задача2, ...); -> вызывает несколько задач одну за другой
exports.default = parallel(задача1, задача2, ...); -> вызывает несколько задач одновременно.
  Методы series и parallel можно вкладывать в друг друга по всякому, главное следить что бы методы не работали одновременно


ВАЖНО: Всегда работы ведутся в src(или app), dist это готовый сайт. Если требуется что-то добавить и что-то удалить, то когда запустим build
      то новые материалы добавятся, одинаковые имена заменяться, а старые файлы останутся. Проще всего удалить папку dist и по новой создать.

*/
