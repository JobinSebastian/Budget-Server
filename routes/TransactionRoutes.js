module.exports = app => {
    const transaction = require('../controller/TransactionController');

    app.get('/getTransactionTypes', transaction.getTransactionTypes);

    app.get('/getTransactionsForPerson/:personId', transaction.getTransactionsForPerson);

    app.post('/saveOrUpdateTransaction', transaction.saveOrUpdateTransaction);

    app.delete('/deleteTransaction/:transactionId', transaction.deleteTransaction);

}