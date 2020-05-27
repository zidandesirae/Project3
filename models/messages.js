const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class Message extends Model { }
    Message.init({
        fullname: DataTypes.STRING,
        groupId: DataTypes.INTEGER,
        messagePost: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: DataTypes.STRING,
        time: DataTypes.STRING,
    },
    { sequelize, modelName: 'message' });

    return Message;
}

