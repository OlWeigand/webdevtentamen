//Node modules
const path = require('path');
const bodyParser = require('body-parser');

//Middleware
const express = require('express');

const app = express();

//Models
const users = require('./models/user');
const foundobjects = require('./models/foundobject');
const forumposts = require('./models/forumpost');
const comments = require('./models/comment');

//import routes
const usersRoutes = require('./routes/users');
const objectsRoutes = require('./routes/objects');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
// view engine setup
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded( // routes 7-12
    {extended: false})
);
//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/users', usersRoutes);
app.use('/objects', objectsRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Lost and Found',
        description: 'NS Lost and Found'
    });
});

app.use((req, res, next) => {
    res.status(404).render('404', {
        title: 404
    });
    console.log('app.js 404');
});

app.listen(20081);
