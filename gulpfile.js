require('dotenv').config();
const { src, dest, series, parallel, watch } = require('gulp');
const fs = require('fs');
const del = require('del');
const pump = require('pump');
const bs = require('browser-sync');

const sass = require('gulp-sass');
const mediaGroup = require('gulp-group-css-media-queries');
const uglifyCSS = require('gulp-uglifycss');/*требуется потому что sass compress снимает gulp-group */

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const babelify = require('babelify');
const uglify = require('gulp-uglify');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

const imagemin = require('gulp-imagemin');

const { EventEmitter } = require('events');

function browserSync(){
  return (
    bs.init({
      // server: {
      //   baseDir: 'src',
      // },
      notify: false,
      scrollProportionally: false,
      online: true,
      proxy: 'len.loc',
      port: 8080,
      host: "192.168.1.65"
     
    })
  )
}

function style(cb) {

  return pump([
    src('src/assets/scss/style.scss'),
    sourcemaps.init(),
    sass({outputStyle: "compressed"}).on('error',sass.logError),
    mediaGroup(),

    autoprefixer({
      cascade: false,
      grid: true,
    }),
    rename({suffix: '.min'}),
    sourcemaps.write('./sourcemap'),
    dest('src/assets/css')
 ])
}

function script(e) {
 
 let jsFile = fs.readdirSync('src/assets/js/dev');
 
  return pump([
    
    browserify({
      entries: jsFile,
      basedir: "src/assets/js/dev",
      debug: true,
    })
    .transform(babelify, {
      presets: ['@babel/preset-env'],
    })
    .bundle((err)=>{
      let event = new EventEmitter();
      if(err){
        console.error(`ERROR >> ${err}`);
        event.emit('end');
      }
    }),
    
    source('bundle.js'),
    buffer(),
    // sourcemaps.init({ loadMaps: true }),
    // sourcemaps.write('./sourcemap'),
    dest('src/assets/js').on('data', bs.reload)
    
  ])
}

function jsMin(){

  return (
    pump([
      src('src/assets/js/bundle.js'),
      // buffer(),
      uglify(),
      rename({suffix: '.min'}),
      dest('src/assets/js')
    ])
  )
}

function build(){
  
  return (
    src([
      'src/assets/css/style.min.css',
      'src/assets/fonts/**/*',
      'src/assets/js/bundle.min.js',
      'src/assets/*.html',
    ], {base: 'src'})
    .pipe(dest('dist'))
  )
}

function images(){
  return pump([
    src('src/assets/img/**/*', { base: 'src' }),
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
  watch('**/js/dev/*.js', script)
  watch('**/*.html').on('change', bs.reload)
  watch('**/*.php').on('change', bs.reload).on('error', bs.reload)
};



exports.images = images;
exports.style = style;
exports.script = script;
exports.jsMin = jsMin;

exports.build = series(()=>del('dist'), jsMin, build, images);
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
