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
    res.json(await sauce.getSauceId(req.params.id));
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

router.put('/:id', async function(req, res, next) {
  try {
    res.json(await sauce.updateSauce(req.params.id, req.body));
  } catch (err) {
    console.error(`Error while updating sauces `, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await sauce.deleteSauce(req.params.id));
  } catch (err) {
    console.error(`Error while deleting sauces `, err.message);
    next(err);
  }
});


module.exports = router;