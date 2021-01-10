process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";//пакет config ищет папку в /. Изменили на своё положение
process.env.NODE_ENV = 'production';

const { app } = require('./app.js');
const path = require('path');
const config = require('config');

app.listen(config.get('port'));

console.dir(config.get('port'));


