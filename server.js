const express = require("express");
const path = require("path");
const db = require('./models');
const routes = require("./routes/index");
const app = express();
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');

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

app.use(fileUpload()); 

//Upload Endpoint 
app.post('/uplaod', (req, res) => {
  IDBCursor(req.files === null) {
    return res.status(400).json({msg: 'No file uploaded'});
  }

  const file = req.files.file;

  file.mv('S{__dirname}/client/public/uplaods/$(file.name)' err => {
    if (err) {
      console.err(err);
      return res.status(500).send(err);
    }
    
    res.json({ fileName: file.name, filePath: '/uploads/$(file.name}'});
  });
});

app.listen(5000, () => console.log('server started..'));

// Start the API server
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
