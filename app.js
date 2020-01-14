//Node modules
const path = require('path');
const bodyParser = require('body-parser');

//Middleware
const express = require('express');

const app = express();

//import routes
const userRoutes = require('./routes/users');
const objectRoutes = require('./routes/objects');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');
// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( // routes 7-12
    {extended: false})
);
//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/users', userRoutes);
app.use('/objects', objectRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Lost & Found',
        description: 'NS Lost & Found'
    });
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 404
    });
    console.log('app.js 404');
});

app.listen(20081);
