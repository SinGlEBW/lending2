const imagemin = require('imagemin');

const bs = require("browser-sync");
const browserify = require("browserify");
const fs = require("fs");
const { render } = require("node-sass");
const babelify = require('babelify');

const { minify } = require('uglify-js');

let outPathCss = "src/css/style.min.css";
let outPathJS = "src/js/bundle.min.js";
bs.init({
  server: {
    baseDir: "src",
  },
  notify: false,
  scrollProportionally: false,
  files: [
    "img/**/*.svg",
    "index.html",
    {
      match: "**/*.scss",
      fn: watchSCSS,
    },
    {
      match: "js/dev/*.js",
      fn: watchJS,
      options: {
        cwd: 'src',//базовый каталог
      }
    },
  ],
});

function watchJS(event, file) {
  let jsFile = fs.readdirSync('src/js/dev');
  //browserify - собирает модули в 1 файл. babelify - преобразовывает в es5
  browserify({
    entries: jsFile,
    basedir: "src/js/dev",
    debug: true,
  })
  .transform(babelify, {
    presets: ['@babel/preset-env'],
  })
  .bundle((err, buffer) => {
    if (err) console.dir(err);
    else {
      let data = minify(buffer.toString(), {}).code;
      fs.createWriteStream(outPathJS).write(data);
    } 
  });
}

function watchSCSS(event, file) {
//в node-sass требуется небольшая задержка при обращении к файлам, чтоб не выскакивала ошибка. (это баг)  
  setTimeout(() => {
    render({
        file: "src/scss/style.scss",
        outputStyle: "compressed",
      },
      (err, result) => {
        if (err) console.error(err);
        else fs.createWriteStream(outPathCss).write(result.css)
      }
    ); 
  }, 300);
}

