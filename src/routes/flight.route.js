const express = require("express");
const { GetFlights, GetFlightsBasedId, CreateFlights, UpdateFlightsData, DeleteFlight } = require("../controller/flight.controller");

const router = express.Router();

router.route("/flights").get(GetFlights);
router.route("/flights/:id").get(GetFlightsBasedId);
router.route("/flights").post(CreateFlights);
router.route("/flights/:id").put(UpdateFlightsData);
router.route("/flights/:id").patch(UpdateFlightsData);
router.route("/flights/:id").delete(DeleteFlight);


module.exports=router;