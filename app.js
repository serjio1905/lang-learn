var config = require('./config.json');
var express = require('express');
var router = require('./controllers/routsController');
var bodyParser = require('body-parser');
var app = express();
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');
app.set('view-engine', 'ejs');
// app.use(express.static('./assets'));
app.use('/assets', express.static('assets'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

router(app);

app.listen(config.port, () => console.log('Example app listening on port ' + config.port + '!'));
