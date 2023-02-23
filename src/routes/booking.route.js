const express = require("express");
const { GetBookingDetail, BookFlight} = require("../controller/booking.controller");

const router = express.Router();

router.route("/booking").get(GetBookingDetail);
router.route("/dashboard").post(BookFlight);


module.exports=router;