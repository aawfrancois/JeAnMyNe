const express = require('express');
const router  = express.Router();
const citation = require('request');
const moment = require('moment');
const bodyParser = require('body-parser');

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

router.get('/dashboard/:id', function (request, response) {

  let InfoDate = moment().format('LL');
  let id = request.params.id
  let url = 'http://quotes.stormconsultancy.co.uk/random.json'
  citation (url,(error,res,body)=>{
    console.log(body.permalink);

    let user = db.user.findOne({where: {id :request.params.id}}).then(user=>{
      response.render('dashboard',{user,InfoDate,body :JSON.parse(body)});
    })
  });
  });



module.exports = router;
