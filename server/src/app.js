const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const stelRouter = require('./routes/stel/stel.router');
//const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/stel', stelRouter);
//app.use('/launches', launchesRouter);
/*
because we have client side routing we add the *
it matches any endpoint that isnt matched above
is is passed to react index html to handle routing
*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

module.exports = app;