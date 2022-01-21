module.exports = (sequelize, DataTypes) => {

    const Debts = sequelize.define('Debts', {
        debtId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            validation: {
                notEmpty: true,
            },
            autoIncrement: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            }
        },
        amount: {
            type: DataTypes.FLOAT,
            validation: {
                notEmpty: true,
            }
        },
        personId: {
            type: DataTypes.INTEGER,
            validation: {
                notEmpty: true,
            },
            references: {
                model: 'person',
                key: 'personId',
            }
        },
        updateUser: {
            type: DataTypes.STRING,
            validation: {
                notEmpty: true,
            }
        },
        createUser: {
            type: DataTypes.STRING,
            validation: {
                notEmpty: true,
            }
        }
    });

    return Debts;
}