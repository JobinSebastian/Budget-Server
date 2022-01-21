const { Person: Person } = require('../models');

exports.getPerson = (req, res) => {
    Person.findAll({
        where: {
            personId: req.params.personId
        }
    }).then((persons) => {
        if (!persons) {
            res.status(404).send({ message: 'No person found.' });
        }
        res.status(200).send(persons);
    }).catch((err) => {
        console.log(err);
    });
};

exports.saveOrUpdatePerson = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Request body cannot be empty.' })
    }
    if (req.body.personId == undefined) {
        Person.create(req.body).then((person) => {
            res.status(200).send(person);
        }).catch((err) => {
            console.log(err);
        });
    } else {
        Person.update(req.body, {
            where: { personId: req.body.personId },
            returning: true,
            plain: true
        }).then((person) => {
            res.status(200).send(person);
        }).catch((err) => {
            console.log(err);
        });
    }
};

exports.deletePerson = (req, res) => {
    Person.destroy({ where: { personId: req.params.personId } })
        .then((person) => {
            if (!person) {
                res.status(404).send({ message: 'Id not found.' });
            }
            res.status(200).send({ message: 'Person deleted.' });
        })
        .catch((err) => {
            console.log(err);
        });

};
