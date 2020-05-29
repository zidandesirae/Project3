const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class Event extends Model { }
    Event.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        start: DataTypes.DATE,
        end: DataTypes.DATE,
        groupId: DataTypes.INTEGER
    }, { sequelize, modelName: 'event' });
    return Event;
}