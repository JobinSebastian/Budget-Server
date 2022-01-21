module.exports = app => {
    const debt = require('../controller/DebtController');

    app.get('/getDebtsByPersonId/:personId', debt.getDebtsByPersonId);

    app.post('/saveOrUpdateDebt', debt.saveOrUpdateDebt);

    app.delete('/deleteDebt/:debtId', debt.deleteDebt);

}