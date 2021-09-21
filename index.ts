import Express from "express";
var cors = require("cors");
require("dotenv").config();

const nocache = require("nocache");
var cors = require("cors");
let app = Express();

//Enables cors and makes it so pages are never cached stopping possible update problems
//Enabling cors allow page to be access on a diffrent domain which is normally blocked by most browser for security reasons 
app.use(nocache());
app.use(cors());


app.listen(process.env.PORT);
