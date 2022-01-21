const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./models');

const Person = require('./models/person');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/select', (req, res) => {
    Person.findAll().then((persons) => {
        console.log(persons);
        res.send(persons);
    }).catch((err) => {
        console.log(err);
    })
});

require('./routes/Routes')(app);

db.sequelize.sync().then( (req) => {
    app.listen(3000, () => {
        console.log('Server Running......');
    });
});
