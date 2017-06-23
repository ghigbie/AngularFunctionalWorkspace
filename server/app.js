const express = require('express'),
          app = express();

app.set('port', process.env.PORT);
app.set('ip', process.env.IP);


app.get('/', (req, res) => {
   res.send(`<h1>This is the HOME page</h1>`); 
});

app.get('*', (req, res) => {
    res.send(`<h1>PAGE NOT FOUND<h1>`);
});

app.listen(app.get('port'), app.get('ip'), ()=>{
    var port = app.get('port');
    console.log(`Server is listening on ${port}`);
});