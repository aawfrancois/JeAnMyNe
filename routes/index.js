const express = require('express');
const router = express.Router();

const db = require('../database/init');

/* GET home page. */
router.get('/', (request, response) => {
  db.user.count().then((nb) => {
    response.render('index', { count: nb });
  });
});

// accède a la fonctionnalité sign-up
router.get('/sign-up', function (request, response) {
  response.render('sign-up');
});


router.post('/sign-up', function (request, response) {
  let user = {
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
  };

  db.user.create(user).then(user => {
    response.redirect('/sign-in');
  }).catch(err => {
    response.redirect('/sign-up');
  });
});



// accède a la fonctionnalité sign-in
router.get('/sign-in', function (request, response) {
  response.render('sign-in');
});


router.post('/sign-in',(request,response)=>{
  let userForm = {
    username: request.body.username,
    password: request.body.password

  };
  db.user.findOne({where: {username: userForm.username}}).then(user=>{
    if(!user){
      console.log("pas de compte");
      response.redirect('/sign-in')
    }
    else if (user.checkPassword(userForm.password)) {
      console.log("connecté");
      // response.redirect('/dashboard')
      let id = 3
      let user = db.user.findOne({where: {id :request.params.id}}).then(user=>{
        response.redirect("/dashboard/:id");

      })
    }
    else {
      console.log("pas le bon mdp");
      response.redirect('/sign-in')
    }
  })
});


module.exports = router;
