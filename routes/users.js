const express = require('express');
const router  = express.Router();
const citation = require('request');
const moment = require('moment');
const bodyParser = require('body-parser');

const db = require('../database/init');

router.get('/profile/:id', function (request, response) {
    let user = db.user.findOne({where: {id: request.params.id}}).then(user => {
        response.render('profile', {user});
    });
});

router.delete('/delete/profile/:id', function (request, response) {
    let id = db.user.destroy({where: {id: request.params.id}}).then(user => {
        response.render('/');
    })

});

router.get('/profile/:id/modules', function (request, response) {
    let user = db.user.findOne({where: {id: request.params.id}}).then(user => {
        response.render('modules', {user});
    });

});

router.get('/update/:id', (request, response) => {
    response.render('editProfile');
});

router.get('/dashboard/:id', function (request, response) {

  let InfoDate = moment().format('LL');
  let id = request.params.id
  let url = 'http://quotes.stormconsultancy.co.uk/random.json'
  citation (url,(error,res,body)=>{
    console.log(body.permalink);

    let user = db.user.findOne({where: {id :request.params.id}}).then(user=>{
        console.log(user);
      response.render('dashboard',{user,InfoDate,body :JSON.parse(body)});
    })
  });
  });



module.exports = router;
