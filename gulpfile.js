require('dotenv').config();
const { src, dest, series, parallel, watch } = require('gulp');
const fs = require('fs');
const path = require('path');
const del = require('del');
const pump = require('pump');
const bs = require('browser-sync');

const sass = require('gulp-sass');
const mediaGroup = require('gulp-group-css-media-queries');
const miniCSS = require('gulp-clean-css');/*требуется потому что sass compress снимает gulp-group */

const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const babelify = require('babelify');
const uglify = require('gulp-uglify');
const uglifyES = require('gulp-uglify-es').default;
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
      proxy: 'http://localhost:4000',
      port: 3000,
      // host: "192.168.1.65"
     
    })
  )
}

function style(cb) {

  return pump([
    src(['src/assets/scss/style.scss', 'src/assets/scss/404.scss']),
    sourcemaps.init(),
    sass({outputStyle: "compressed"}).on('error',sass.logError),
    mediaGroup(),
    autoprefixer({
      cascade: false,
      grid: true,
    }),
    miniCSS(),
    rename({suffix: '.min'}),
    sourcemaps.write('./sourcemap'),
    dest('src/assets/css')
 ])
}

function script(e) {

  function getFiles(basedirJS){
    return fs.readdirSync(basedirJS).reduce((prev, item) => {
      
      if(item.endsWith('.js')){
          return [...prev, {file: `${__dirname}\\${basedirJS}\\${item}` }]
      }else{
       return [...prev, ...getFiles(`${basedirJS}\\${item}`)]
      }
     },[])
  }
 

  return pump([
    
    browserify({
      entries: getFiles('src\\assets\\js\\dev'),
      debug: true,
    })
   
    .transform(babelify, {
      presets: ['@babel/preset-env'],
      plugins: ["@babel/plugin-proposal-class-properties"]
    })
   
    .bundle((err)=>{
      let event = new EventEmitter();
      if(err){
        console.error(`ERROR >> ${err}`);
        event.emit('end');
      }
    }),
    
    source('bundle.min.js'),
    buffer(),
    // uglify(), 
    dest('src/assets/js').on('data', bs.reload)
    
  ])
}

function jsMin(){

  return (
    pump([
      src(['src/assets/js/bundle.min.js']),
      sourcemaps.init({ loadMaps: true }),
      buffer(),
      uglify(), 
      // rename({suffix: '.min'}),
      sourcemaps.write('./sourcemap'),
      dest('src/assets/js')
    ])
  )
}
function jsMin2(){

  return (
    pump([
      src(['src/assets/js/checkDevice.js']),
      uglifyES(),
      rename({suffix: '.min'}),
      dest('src/assets/js')
    ])
  )
}

function build(){
  
  return (
    src([
      'src/assets/css/**/*',
      'src/assets/fonts/**/*',
      'src/assets/js/*.min.js',
      'src/assets/js/sourcemap/*.min.js.map',
      'src/config/**/*',
      'src/services/**/*',
      'src/views/**/*',
      'src/.htaccess',
      'src/*.php',
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
  watch('**/js/dev/**/*.js', script)
  watch('**/*.html').on('change', bs.reload)
  watch('**/*.php').on('change', bs.reload).on('error', bs.reload)
};



exports.images = images;
exports.style = style;
exports.script = script;
exports.jsMin = jsMin;

exports.build = series(()=>del('dist'),style, script, parallel(jsMin, jsMin2), build, images);
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
