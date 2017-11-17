const express = require('express');
const router  = express.Router();

const db = require('../database/init');

router.get('/:name', (request, response) => {

  db.user.create({
    username: request.params.name
  }).then(() => {
    response.redirect('/');
  });

});

// accède a la fonctionnalité profile
router.get('/profile/:id', function (request, response) {
    response.render('profile');
});



module.exports = router;
