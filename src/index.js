const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

const db = require('./config/db');
const route = require('./routes');

const app = express();
const port = 3000;

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// Middleware method POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    return console.log(
        `App listening XUAN at http://localhost:${port}`,
    );
});
