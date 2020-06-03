const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class List extends Model { }
    List.init({
        groupId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        list: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },  { sequelize, modelName: 'list' });

    return List;
}

