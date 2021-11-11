const express = require('express');
const app = express();
const port = 4000;
// const db = require('./config/connection');
const path = require('path');

app.set('view engine' ,'ejs');
app.set('views','./views');

app.use(express.urlencoded());
// app.use('/public', express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

var imageRouter = require('./routes/image-route');
app.use('/', imageRouter);

app.listen(port , function(err){
    if(err)
    {
        console.log(`Error in running server : ${err}`);
    }

    console.log(`Server is running on port : ${port}`);
});
