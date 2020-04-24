const Sequelize = require("sequelize");

// // Connect to the MySQL DB
const sequelize = new Sequelize("test", "root", "root", {
	host: "localhost",
	dialect: "mysql"
});

const User = sequelize.import(__dirname + "/users");

var dbReady = sequelize.sync();

module.exports = {
    sequelize: sequelize,
    User: User
}