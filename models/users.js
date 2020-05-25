'use strict';

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
            allowNull: false,
            validate: {
                len: {
                  args: [8, 20],
                  msg: 'The password needs to be between 8 and 20 characters long',
                },
            }
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

    User.associate = (models) => {
        User.belongsToMany(models.Group, {
                through: "User_Group",
                as: "groups",
                foreignKey: "user_id",
        });
    };

    return User;
}

