const express = require('express');
const router  = express.Router();

const db = require('../database/init');

router.get('/:name', (req, res) => {

  db.user.create({
    username: req.params.name
  }).then(() => {
    res.redirect('/');
  });

});

module.exports = router;
