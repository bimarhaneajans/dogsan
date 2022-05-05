const express = require("express");
const cors = require("cors");
const dbConfig = require("./src/config/db.config");
const app = express();


//8080 dedigi webservis 
//8081 websesite
/*
var corsOptions = {
//  origin: "http://localhost:8081" // websäte
//origin: "https://dogsan.madilink.com" // websäte
 //origin: "*" // websäte
 
};
*/
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json({limit: "30mb",extended:true}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./src/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  // initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to dogsan application." });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// routes
require("./src/routes/auth.routes")(app);
require("./src/routes/user.routes")(app);
require("./src/routes/bayi.routes")(app);
require("./src/routes/blog.routes")(app);
require("./src/routes/deger.routes")(app);
require("./src/routes/duyuru.routes")(app);
require("./src/routes/etkinlik.routes")(app);
require("./src/routes/hakkimizda.routes")(app);
require("./src/routes/igne.routes")(app);
require("./src/routes/iletisim.routes")(app);
require("./src/routes/katalog.routes")(app);
require("./src/routes/kategori.routes")(app);
require("./src/routes/mesaj.routes")(app);
require("./src/routes/sehir.routes")(app);
require("./src/routes/slider.routes")(app);
require("./src/routes/sosyalsorumluluk.routes")(app);
require("./src/routes/Tarihce.routes")(app);
require("./src/routes/TarihceGarleri.routes")(app);
require("./src/routes/urun.routes")(app); 
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
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
