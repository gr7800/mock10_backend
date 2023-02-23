const express = require("express");
const { GetBookingDetail, BookFlight} = require("../controller/booking.controller");

const router = express.Router();

router.route("/dashboard").get(GetBookingDetail);
router.route("/booking").post(BookFlight);


module.exports=router;