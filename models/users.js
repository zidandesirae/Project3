const Sequelize = require("sequelize");
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
    class User extends Model { }
    User.init({
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {isEmail: true}
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.STRING,
            allowNull: false
        },
        groupId: DataTypes.INTEGER
    },
    { sequelize, modelName: 'user' });

    User.prototype.validPassword = function(password) {
        return this.password === password;
        //return bcrypt.compareSync(password, this.password); - use if switching to bcrypt
    };
    return User;
}

