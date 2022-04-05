const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
 const mongoose = require('mongoose');

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

 app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
require("./app/routes/user.routes")(app);
require("./app/routes/admin.routes")(app);
 

mongoose
  .connect("mongodb+srv://", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  app.get("/", (req, res) => {
  res.json({ message: "Dogsan Server Aktif" });
}); 

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
const server=app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

  

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      }); 

    }

    
  });
}