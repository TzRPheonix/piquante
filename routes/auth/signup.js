const express = require('express');
const router = express.Router();
const users = require('../../services/user');

router.post('/', async function(req, res, next) {
  try {
    res.json(await users.signup(req.body));
  } catch (err) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
});

module.exports = router;