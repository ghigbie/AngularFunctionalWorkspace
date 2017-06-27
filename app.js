const express = require('express'),
         path = require('path'),
          app = express();
          
app.set('port', process.env.PORT);
app.set('ip', process.env.IP);
app.set('view engien', 'ejs');
//__dirname = __dirname + "/shells";
//app.use(express.static(__dirname));

app.use("/public", express.static(path.join(__dirname, "/public")));
app.use("/node_modules", express.static(path.join(__dirname, "/node_modules")));
app.use("/modules", express.static(path.join(__dirname, "/modules")));
app.use("/controllers", express.static(path.join(__dirname, "/controllers")));


app.get('/', (req, res) =>{
    console.log("home was hit");
    console.log(__dirname);
    res.render("home.ejs");
});

app.get('/2', (req, res) => {
    console.log("page two was hit");
    res.render("page2.ejs");
});

app.get('*', (req, res) => {
    res.render("notfound.ejs");
});

app.listen(app.get('port'), app.get('ip'), () => {
    var port = app.get('port');
    console.log(`Server is listening on port ${port}`); 
});
