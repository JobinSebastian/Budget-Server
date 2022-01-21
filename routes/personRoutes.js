module.exports = app => {
    const person = require('../controller/PersonController');

    app.get('/getPersonById/:personId', person.getPerson);

    app.post('/saveOrUpdatePerson', person.saveOrUpdatePerson);

    app.delete('/deletePerson/:personId', person.deletePerson);

}