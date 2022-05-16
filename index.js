const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");

const miniMailRoutes = require("./routers/miniMailRoutes");
const miniMailConnection = require("./database/miniMailDatabase");

const app = express();
dotenv.config({path: "./config.env"});
miniMailConnection();

// parse JSON
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// set view engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/homeLayout");

app.use("/v1", miniMailRoutes);

app.listen(process.env.PORT || 3004, function() {
  console.log("server is running");
});