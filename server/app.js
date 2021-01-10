const express = require('express');
const path = require('path');
/*----------------------------------------------------------------------------*/
const app = express();
/*----------------------------------------------------------------------------*/
const { errHandler } = require('./errHandler');
const instagramRoute = require('./routes/instagram-route');
const maps = require('./routes/maps-route');

app.use(express.static(path.join(__dirname, '../src')));
/*----------------------------------------------------------------------------*/
app.use('/instagram', instagramRoute);//ветка на запрос photo
app.use('/maps', maps);//ветка на запрос maps

/*----------------------------------------------------------------------------*/
app.use(errHandler)
/*----------------------------------------------------------------------------*/
exports.app = app;
