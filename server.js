// require
const express = require('express');
const app = express();
const path = require('path');

const port = process.argv[2] || 8080;

// ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// midlleWare
app.use(express.static(path.join(__dirname, 'public')));


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
    response.render('sign-in');
});

// accède a la fonctionnalité sign-up
app.get('/sign-up', function (request, response) {
    response.render('sign-up');
});
app.post('/sign-up', function (request, response) {
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
app.listen(port, () => {
    console.log(`Server is running on port : ${port} `)
});
