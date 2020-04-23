const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class User extends Model { }
    User.init({
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        email: {type: DataTypes.STRING, validate: {isEmail: true}},
    }, { sequelize, modelName: 'user' });
    return User;
}

