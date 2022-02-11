import Express from "express";
import createAccount from "./routes/accounts/createAccount";
import debug from "./routes/debug";
import echo from "./routes/echo";
import getAllRecipes from "./routes/search/getAllRecipes";
var cors = require("cors");
require("dotenv").config();

const nocache = require("nocache");
var cors = require("cors");
let app = Express();

//Enables cors and makes it so pages are never cached stopping possible update problems
//Enabling cors allow page to be access on a diffrent domain which is normally blocked by most browser for security reasons
app.use(nocache());
app.use(cors());
app.use(require("body-parser").urlencoded({ extended: false }));
app.use(debug);
app.use("/account/createAccount", createAccount);
app.use("/search/findAll", getAllRecipes);
app.listen(process.env.PORT);
