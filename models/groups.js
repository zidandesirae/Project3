'use strict';

const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class Group extends Model { }
    Group.init({
        name: DataTypes.STRING    
    }, { sequelize, modelName: 'group' });

    Group.associate = (models) => {
        Group.belongsToMany(models.User, {
            through: "User_Group",
            as: "users",
            foreignKey: "group_id",
        });
    };

    return Group;
}