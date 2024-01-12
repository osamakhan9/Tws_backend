const express = require('express');
const router = new express.Router;
const menu = require('../controllers/menuController')
const parent = require('../controllers/ParentController')

router.post('/menu', menu.create)
router.post('/parent', parent.create);
router.get('/all', parent.parentAllData)

module.exports = router