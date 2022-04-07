const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require('express-session');

const xXssProtection = require("x-xss-protection");
const helmet = require("helmet");
const hpp = require("xss-clean");
const rateLimit = require("express-rate-limit");
var xssFilters = require('xss-filters');
var csrf = require('csurf')
var csrfProtection = csrf({ cookie: true })




const app = express();
var corsOptions = {
  origin: "http://37.77.4.139:3000"
};

app.use(cors(corsOptions));

 app.use(bodyParser.json());

 var expiryDate = new Date(Date.now() + 60 * 60 * 1000)
 app.use(express.urlencoded({ extended: true }));


 app.get("/", (req, res) => {
  res.json({ message: "Dogsan" });
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
require("./routes/customer.routes")(app);

 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

