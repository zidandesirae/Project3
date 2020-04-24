const express = require("express");

// const Sequelize = require("sequelize");

const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;
console.log(routes);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(express.static("../../project3reactapp/build"));
app.use(routes);

// // Connect to the MySQL DB
// const sequelize = new Sequelize("test", "root", undefined, {
// 	host: "localhost",
// 	dialect: "mysql"
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
