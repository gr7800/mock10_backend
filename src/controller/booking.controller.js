const { BokingModel } = require("../model/Booking.model");
const { UserModel } = require("../model/User.model")
const { FlightModel } = require("../model/Flight.model")

exports.GetBookingDetail = async (req, res) => {
    let {user} = req.body;
    if (user) {
        try {
            const all_booking = await BokingModel.find({ "user": user });
            return res.status(200).send(all_booking);
        } catch (error) {
            console.log(error);
            return res.status(401).send({ "err": "Somthing went wrong" })
        }
    } else {
        try {
            let all_booking = await BokingModel.find();

            return res.status(200).send(all_booking);
        } catch (error) {
            console.log(error);
            return res.status(401).send({ "err": "Somthing went wrong" })
        }

    }


}
exports.BookFlight = async (req, res) => {
    let { userid } = req.body;
    let { flightid } = req.body;
    let user = await UserModel.findOne({ "_id": userid });
    let flight = await FlightModel.findOne({ "_id": flightid });
    try {
        let boking = new BokingModel({ "user": user, "flight": flight });
        await boking.save();
        return res.status(200).send({ message: "Flight Booked succefully" })
    } catch (error) {
        console.log(error)
        return res.status(401).send({ "err": "Somthing went wrong" })
    }
}