const { Transactions: Transactions, TransactionType: TransactionType } = require('../models');

exports.getTransactionTypes = (req, res) => {
    TransactionType.findAll()
        .then(
            (types) => res.status(200).send(types)
        )
        .catch((err) => {
            console.log(err);
        });
}

exports.getTransactionsForPerson = (req, res) => {
    Transactions.findAll({ where: { personId: req.params.personId } })
        .then((transactions) => {
            res.status(200).send(transactions);
        })
        .catch((err) => { console.log(err); });
}

exports.saveOrUpdateTransaction = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: 'Bad Request' });
    }
    if (!req.body.transactionId) {
        Transactions.create(req.body).then((transaction) => {
            res.status(200).send(transaction);
        })
            .catch((err) => {
                console.log(err);
            });
    } else {
        Transactions.update(req.body, { where: { transactionId: req.params.transactionId } })
            .then((transaction) => {
                res.status(200).send(transaction);
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

exports.deleteTransaction = (req, res) => {
    Transactions.destroy({ where: { transactionId: req.params.transactionId } })
        .then((transaction) => {
            if (!person) {
                res.status(404).send({ message: 'Id not found.' });
            }
            res.status(200).send({ message: 'Debt deleted.' });
        })
        .catch((err) => {
            console.log(err);
        });
}
