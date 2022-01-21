module.exports = (sequelize, DataTypes) => {

    const Transactions = sequelize.define('Transactions', {
        transactionId: {
            type: DataTypes.DOUBLE,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            autoIncrement: true
        },
        transactionTypeCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'transaction_types',
                key: 'transactionTypeCode'
            }
        },
        transactionsDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        walletId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'wallets',
                key: 'walletId'
            }
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            references: {
                model: 'person',
                key: 'personId'
            }
        },
        transactionAmount: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        debtId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updateUser: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        createUser: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        }
    }, {
        tableName: 'transactions'
    });

    return Transactions;

}