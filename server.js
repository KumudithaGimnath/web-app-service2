const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(cors());

const { User } = require("./db");

app.get("/", (req, res) =>
    res.send("Welcome to Node.js + MySQL boilerplate API.")
);

app.get("/users", (req, res) => {
    User.findAll().then((users) => {
        res.send(users);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
});