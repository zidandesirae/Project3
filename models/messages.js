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
        createdAt: {
            type: DataTypes.DATE
        }
    },  { sequelize, modelName: 'message' });

    return Message;
}

