const router = require('express').Router();

const { showImagesInstagram, testRefresh } = require('../controllers/instagram-controller');
/*----------------------------------------------------------------------------*/


router.get('/show', showImagesInstagram);
router.get('/refresh', testRefresh);

/*----------------------------------------------------------------------------*/
module.exports = router