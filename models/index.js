const Sequelize = require("sequelize");

// // Connect to the MySQL DB
// User and password points for MSQL DB
const sequelize = new Sequelize("test", "root", "", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.import(__dirname + "/users");
const Event = sequelize.import(__dirname + "/events");
const Group = sequelize.import(__dirname + "/groups");

// User.belongsTo(Group);
// Group.belongsTo(User);
User.belongsToMany(Group, { through: 'User_Group' });
Group.belongsToMany(User, { through: 'User_Group' });
Group.hasMany(Event);
Event.belongsTo(Group);

var dbReady = sequelize.sync();

module.exports = {
    sequelize: sequelize,
    User: User,
    Event: Event,
    Group: Group
}