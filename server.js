const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');
const path = require("path");
const db = require("./models");
const routes = require("./routes/index");
const passport = require("./middleware/index");
const session = require("express-session");
//const Photos = require("./models/photos");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(express.static("public"));

app.use(fileUpload()); 

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


//Upload Endpoint 
app.post('/upload', (req, res) => {
  console.log("something");
  if(req.files === null) {
    return res.status(400).json({msg: 'No file uploaded'});
  }
  
  const file = req.files.file;
  
  Photos.create(file);
  
  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
});

app.use(routes);

// Start the API server
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});