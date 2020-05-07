const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const fileUpload = require('express-fileupload');
const path = require("path");
const db = require("./models");
const routes = require("./routes/index");
//const Photos = require("./models/photos");
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

app.use(fileUpload()); 

//Upload Endpoint 
app.post('/upload', (req, res) => {
  console.log("something");
  if(req.files === null) {
    return res.status(400).json({msg: 'No file uploaded'});
  }

  const file = req.files.file;

  // Photos.create(file);

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}`});
  });
});

app.use(routes);

//Message Board
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', function(msg) {
    console.log('message: ' + JSON.stringify(msg));
    io.emit('chat message', msg);
  });
});

// Start the API server
db.sequelize.sync({}).then(function() {
  http.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
