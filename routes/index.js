const express = require('express');
const router = express.Router();

const db = require('../database/init');

/* GET home page. */
router.get('/', (request, response) => {
  db.user.count().then((nb) => {
    response.render('index', { count: nb });
  });
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
        response.redirect('/');
    }).catch(err => {
        response.redirect('/sign-up');
    });
});

module.exports = router;


/*db.user.findOrCreate(where: { email: user.email}}).then(user => {
    if(!user){

    }
})*/