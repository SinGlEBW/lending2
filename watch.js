const bs = require("browser-sync");
const browserify = require("browserify");
const fs = require("fs");
const { render } = require("node-sass");
const babelify = require('babelify');

const { minify } = require('uglify-js');

let outPathCss = "src/css/style.css";
let outPathJS = "src/js/bundle.js";



bs.init({
  server: {
    baseDir: "src",
    index: "index.html"
  },

  notify: false,
  scrollProportionally: false,
  watch: true,
  xip: true,//при старте обновить файлы

  files: [
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
  browserify(jsFile, {
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

  setTimeout(() => {
    render({
        file: "src/css/scss/style.scss",
        outputStyle: "compressed",
      },
      (err, result) => {
        if (err) console.error(err);
        else fs.createWriteStream(outPathCss).write(result.css);
      }
    ); 
  }, 300);
}