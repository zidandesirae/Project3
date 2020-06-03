const Sequelize = require("sequelize");
// const config = require("../config/config.json");
require ("dotenv").config();

// Connect to the MySQL DB
// User and password points for MSQL DB
// const sequelize = new Sequelize(process.env.JDATABASE, process.env.JUSERNAME, process.env.JPASSWORD, {
// 	host: process.env.JHOST,
// 	dialect: "mysql"
// });

const sequelize = new Sequelize("test", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

const User = sequelize.import(__dirname + "/users");
const Event = sequelize.import(__dirname + "/events");
const Group = sequelize.import(__dirname + "/groups");
const Message = sequelize.import(__dirname + "/messages");
const List = sequelize.import(__dirname + "/lists");
//const Photos = sequelize.import(__dirname + "/photos");


User.belongsToMany(Group, { through: 'User_Group' });
Group.belongsToMany(User, { through: 'User_Group' });

// Group.hasMany(Event);
// Event.belongsTo(Group);

var dbReady = sequelize.sync();

module.exports = {
    sequelize: sequelize,
    User: User,
    Event: Event,
    Group: Group,
    Message: Message,
    List: List
   // Photos: Photos
}