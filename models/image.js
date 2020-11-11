const Sequelize = require('sequelize')
const sequelize = require('../utils/database')

const image = sequelize.define('Image', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = image