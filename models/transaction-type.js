module.exports = (sequelize, DataTypes) => {

    const TransactionType = sequelize.define('TransactionType', {
        transactionTypeCode: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        updateUser: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        tableName: 'transaction_types'
    });

    return TransactionType;
}