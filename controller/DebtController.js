const { Debts: Debts } = require('../models');

exports.getDebtsByPersonId = (req, res) => {
    Debts.findAll({ where: { debtId: req.params.debtId } })
        .then((debts) => {
            res.status(200).send(debts);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.saveOrUpdateDebt = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad Request' });
    }
    if (!req.body.debtId) {
        Debts.create(req.body).then((debts) => {
            res.status(200).send(debts);
        })
            .catch((err) => {
                console.log(err);
            });
    } else {
        Debts.update(req.body, { where: { debtId: req.params.debtId } })
            .then((debts) => {
                res.status(200).send(debts);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

exports.deleteDebt = (req, res) => {
    Debts.destroy({ where: { debtId: req.params.debtId } })
        .then((debts) => {
            if (!person) {
                res.status(404).send({ message: 'Id not found.' });
            }
            res.status(200).send({ message: 'Debt deleted.' });
        })
        .catch((err) => {
            console.log(err);
        });
}
