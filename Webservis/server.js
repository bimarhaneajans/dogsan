const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const session = require('express-session');
const bodyParser = require("body-parser");

const xXssProtection = require("x-xss-protection");
const helmet = require("helmet");
const hpp = require("xss-clean");
const rateLimit = require("express-rate-limit");
var xssFilters = require('xss-filters');
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })
const mongodb = require ('mongodb');
const app = express();

var corsOptions = {
  origin: "http://37.77.4.139:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

var expiryDate = new Date(Date.now() + 60 * 60 * 1000)
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

  app.use(
  cookieSession({
    name: "dogsan-session",
    secret: "dogsanwebsite", // should use as secret environment variable
    httpOnly: true
  })
); 
const db = require("./src/models");

console.log(db.url);

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
        //initial();

  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
const Role = db.role;


 
 

 app.get("/", (req, res) => {
  res.json({ message: "Dogsan Server is Working ! " });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the reques>
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.use(helmet.hidePoweredBy());
app.use(hpp());
app.use(xXssProtection());
app.disable('x-powered-by');

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
require("./src/routes/mesaj.routes")(app);
require("./src/routes/sehir.routes")(app);
require("./src/routes/slider.routes")(app);
require("./src/routes/sosyalsorumluluk.routes")(app);
require("./src/routes/Tarihce.routes")(app);
require("./src/routes/TarihceGarleri.routes")(app);
require("./src/routes/urun.routes")(app); 

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