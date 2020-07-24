const router = require('express').Router();
const homeCtrl = require('../app/controllers/homeController');
const systemCtrl = require('../app/controllers/systemController');
const vitrineCtrl = require('../app/controllers/vitrineController');

router.get('/', homeCtrl.home);
router.get('/cadastrar', systemCtrl.register);
router.get('/vitrine', vitrineCtrl.vitrine);
router.post('/system/save', systemCtrl.save);

module.exports = router;    
