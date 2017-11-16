
const express      = require('express');
const path         = require('path');

const port = process.argv[2] || 8080;
const app  = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');






app.get('/', function(request, response) {
    response.render('index');

});

app.get(/^\/(index)?$/, function(request, response) {
    response.render('index');
});



app.listen(port,()=>{
  console.log(`Server is running on port : ${port} `);
})
