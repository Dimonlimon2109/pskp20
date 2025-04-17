const express = require('express');
const router = express.Router();
const Controller = require('../controllers/indexController');

router.get('/', Controller.getList);
router.get('/Add', Controller.getAdd);
router.get('/Update', Controller.getUpdate);
router.post('/Add', Controller.addContact);
router.post('/Update', Controller.updateContact);
router.post('/Delete', Controller.deleteContact);

module.exports = router;
