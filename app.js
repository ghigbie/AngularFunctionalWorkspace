const express = require('express'),
         path = require('path'),
          app = express();
          
app.set('port', process.env.PORT);
app.set('ip', process.env.IP);

app.listen(app.get('port'), app.get('ip'), () => {
    var port = app.get('port');
    console.log(`Server is listening on port ${port}`); 
});