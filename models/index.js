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


User.belongsToMany(Group, { through: 'User_Group' });
Group.belongsToMany(User, { through: 'User_Group' });
// User.hasMany(Group);
// Group.hasMany(User);
Group.hasMany(Event);
Event.belongsTo(Group);

var dbReady = sequelize.sync();

module.exports = {
    sequelize: sequelize,
    User: User,
    Event: Event,
    Group: Group
}