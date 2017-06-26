const express = require('express'),
         path = require('path'),
          app = express();
          
app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.use(express.static(__dirname + "/public/shells"));

app.get('/', (req, res) =>{
    console.log("home was hit");
    res.render("home.ejs");
});

app.get('/2', (req, res) => {
    console.log("page two was hit");
    res.render("notfound.ejs");
});

app.get('*', (req, res) => {
    res.render("notfound.ejs");
});

app.listen(app.get('port'), app.get('ip'), () => {
    var port = app.get('port');
    console.log(`Server is listening on port ${port}`); 
});