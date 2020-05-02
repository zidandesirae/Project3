const Sequelize = require("sequelize");

// // Connect to the MySQL DB
// User and password points for MSQL DB
const sequelize = new Sequelize("test", "root", "root", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.import(__dirname + "/users");
const Event = sequelize.import(__dirname + "/events");
const Group = sequelize.import(__dirname + "/groups");

User.hasMany(Group);
Group.hasMany(User);
Group.hasMany(Event);
Event.hasOne(Group);

var dbReady = sequelize.sync();

module.exports = {
    sequelize: sequelize,
    User: User,
    Event: Event,
    Group: Group
}