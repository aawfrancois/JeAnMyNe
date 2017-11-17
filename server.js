const express    = require('express');
const path       = require('path');
const moment     = require('moment');
const bodyParser = require('body-parser');

const db = require('./database/init');

const app = express();

const index = require('./routes/index');
const users = require('./routes/users');

const port = process.argv[2] || 8080;



// ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
/*app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/


// accède a la page index si url : "/" ou "index"
app.get('/', function (request, response) {
    response.render('index');

});

app.get(/^\/(index)?$/, function (request, response) {
    response.render('index');
});

// accède a la fonctionnalité sign-in
app.get('/sign-in', function (request, response) {
    response.render('sign-in');
});

app.post('/sign-in', function (request, response) {
    lol = request.body;
    console.log(lol);
    response.render('/',{lol});

});

// accède a la fonctionnalité sign-up
app.get('/sign-up', function (request, response) {
    response.render('sign-up');
});
app.post('/sign-up', function (request, response) {
    request.body
    response.render('sign-up');
});

// accède a la fonctionnalité profile
app.get('/profile/:id', function (request, response) {
    response.render('profile');
});

app.get('/profile/:id/edit', function (request, response) {
    response.render('edit');
});

app.put('/profile:id', function (request, response) {
    response.render('edit');
});
app.delete('/profile:id', function (request, response) {
    response.render('edit');
});

app.get('/profile:id/modules', function (request, response) {
    response.render('edit');
});

app.post('/profile:id/modules', function (request, response) {
    response.render('edit');
});

app.delete('/profile:id/modules', function (request, response) {
    response.render('edit');
});
app.put('/profile:id/modules', function (request, response) {
    response.render('edit');
});


// portListen
db.sequelize.sync().then(() => {
    console.log("Database config success!");

    app.listen(port, (err) => {
        console.log(`Server is running on port ${port}`);
    });

}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
