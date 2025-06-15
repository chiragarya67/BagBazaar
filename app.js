const express = require('express');
const app = express();

const cookieParser = require ('cookie-parser');
const path = require('path');
const expressSession = require("express-session")
const flash = require("connect-flash")


const AdminRouter = require("./routes/AdminRouter")
const usersRouter = require("./routes/usersRouter")
const productRouter = require("./routes/productRouter")
const indexRouter = require("./routes/indexRouter")

require("dotenv").config();

const db = require ("./config/mongoose-connection");
const session = require('express-session');

app.use(express.json());    
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());    
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);

app.use(flash());

app.use("/", indexRouter);
app.use("/Admin", AdminRouter);
app.use("/users", usersRouter);
app.use("/products", productRouter);




app.listen(3000, () => {    
    console.log('Server is running on http://localhost:3000');
});