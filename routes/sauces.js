const express = require('express');
const router = express.Router();
const sauce = require('../services/sauce');

router.get('/', async function(req, res, next) {
  try {
    res.json(await sauce.getSauce(req.query.page));
  } catch (err) {
    console.error(`Error while getting sauces `, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await sauce.getSauceId(req.query.page, req.params.id));
  } catch (err) {
    console.error(`Error while getting sauces `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await sauce.addSauce(req.body));
  } catch (err) {
    console.error(`Error while creating sauce`, err.message);
    next(err);
  }
});


module.exports = router;