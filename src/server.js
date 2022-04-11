var express = require('express');
var exphbs = require('express-handlebars');
const path = require('path');
// INITIALIZATIONS

var app = express();

//SETTING
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, './views'));
var hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
});

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');
//MIDDLEWARES
app.use(express.urlencoded({extended: false}));
//GLOBAL VARIABLES

//ROUTES
app.get('/', function (req, res){
    res.render('index')
});

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;