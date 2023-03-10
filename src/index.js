require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const PORT = process.env.PORT;
const user = require("../src/routes/user.route");
const flight = require("../src/routes/flight.route");
const booking = require("../src/routes/booking.route");

const { authentication } = require("./middlewares/authentication");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api", user);
app.use("/api",flight);
app.use("/api",booking)

app.listen(PORT, async () => {
    try {
        await connect;
        console.log(`Listening at http://localhost:${PORT}`)
    } catch (error) {
        console.log(error);
    }
})