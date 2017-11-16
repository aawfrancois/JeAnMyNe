// require
const express      = require('express');
const app  = express();
const path         = require('path');

const port = process.argv[2] || 8080;


// ejs
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// midlleWare
app.use(express.static(path.join(__dirname,'public')));



app.get('/', function(request, response) {
    response.render('index');

});

app.get(/^\/(index)?$/, function(request, response) {
    response.render('index');
});


// portListen
app.listen(port,()=>{
  console.log(`Server is running on port : ${port} `);
})
