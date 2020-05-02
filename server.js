const express = require("express");
const path = require("path");
// const db = require('./models');
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");
console.log(routes);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(express.static("../../client/build"));
app.use('/static', express.static(path.join(__dirname, '../client/build/static')))
app.use(routes);

// Start the API server
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
