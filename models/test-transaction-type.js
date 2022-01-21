module.exports = (sequelize, DataTypes) => {

    const PersonTest = sequelize.define('PersonTest', {
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
    });

    return PersonTest;
}