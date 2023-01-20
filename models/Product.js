const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {};

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                lens: [10],
            }
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // date_posted: {
        //     type: DataTypes.DATE,
        //     defaultValue: DataTypes.NOW
        // },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: true, //NOT SURE IF NEEDED
        freezeTableName: true,
        underscored: true,
        modelName: 'product'
    }
);

module.exports = Product;