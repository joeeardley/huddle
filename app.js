const express = require('express');
const app = express();
const ejs = require('ejs');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//SERVER
const port = process.env.PORT;


//ROUTES
app.get('/', (req, res) => {                    //Default route
    res.render('pages/index')
});

app.get('/about', (req, res) => {                    //About route
    res.render('pages/about')
});

app.get('/search', (req, res) => {                    //Search route
    res.render('pages/search')
});

app.get('/login', (req, res) => {                    //Login route
    res.render('pages/login')
});

app.get('/join', (req, res) => {                 //Register/join route
    res.render('pages/join')
});

app.get('*', (req, res) => {                    //Catch-all route - add all routes above
    res.render('pages/lost')
});


//LISTEN
app.listen(port, () => {
    console.log(`Huddle server listening on ${port}. `)
});
