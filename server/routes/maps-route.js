const router = require('express').Router();


const { yandexMaps, googleMaps } = require('../controllers/maps-controller');



router.get('/yandex-maps', yandexMaps);
router.get('/google-maps', googleMaps);



module.exports = router