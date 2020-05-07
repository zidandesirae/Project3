const Sequelize = require("sequelize");
// const config = require("../config/config.json");
require("dotenv").config();
const JAWS = process.env.JAWSDB_URL.split("//")[1];
const JUSERNAME = JAWS.split(":")[0];
const JPASSWORD = JAWS.split(":")[1];
const JHOST = JAWS.split("@")[1].split("/")[0];
const JDATABASE = JAWS.split("@")[1].split("/")[1];




// mysql://atcgycl0jnpmzkxe:xl6y5xnkn7ukt5f5@ijj1btjwrd3b7932.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/eorb48tlzwo9u6el

// // Connect to the MySQL DB
// User and password points for MSQL DB

const sequelize = new Sequelize(JDATABASE, JUSERNAME, JPASSWORD, {
    host: JHOST,
	dialect: "mysql"
});

const User = sequelize.import(__dirname + "/users");
const Event = sequelize.import(__dirname + "/events");
const Group = sequelize.import(__dirname + "/groups");
// const Photos = sequelize.import(__dirname + "/photos");


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

    Group: Group //,
   // Photos: Photos
}