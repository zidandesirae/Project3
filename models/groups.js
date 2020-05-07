const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class Group extends Model { }
    Group.init({
        name: DataTypes.STRING,
        circlecode: DataTypes.INTEGER
    }, { sequelize, modelName: 'group' });
    return Group;
}