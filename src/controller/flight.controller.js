const { FlightModel } = require("../model/Flight.model")


exports.GetFlights = async (req, res) => {
    try {
        const all_flights=await FlightModel.find();
       return res.status(200).send(all_flights);
    } catch (error) {
        console.log(error);
        return res.status(401)
    }
    
}

exports.GetFlightsBasedId = async (req,res)=>{
    let id = req.params.id.split(":").map(String)[1];
    console.log(id);
    try {
        let data = await FlightModel.findOne({"_id":id});
        return res.status(200).send(data);
    } catch (error) {
        console.log(error)
        return res.status(401).send({ "err": "Somthing went wrong" })
    }
}
exports.CreateFlights = async (req,res)=>{
    const payload = req.body;
    const {flightNo} = req.body;
    const exist =await FlightModel.findOne({flightNo});
    if(exist){
        res.status(401).send({message: "Flights Alredy exist"})
    }else{
        try {
            const new_flight = new FlightModel(payload);
            await new_flight.save();
           return res.status(201).send({message:"Flight created Successfully"})
        } catch (error) {
            console.log(error)
            return res.status(401).send({ "err": "Somthing went wrong" })
        }
    }
}
exports.UpdateFlightsData = async (req,res)=>{
    const id = req.params.id.split(":").map(String)[1];
    const payload = req.body;
    console.log(id);
    try {
        let data= await FlightModel.findByIdAndUpdate({"_id":id},payload)
        return res.status(204).send({message:"Flight item updated sucessfully",data:data})
    } catch (err) {
        console.log(err);
        res.status(401).send({ "error": "Somthing went wrong" })
    }
}
exports.DeleteFlight=async(req,res)=>{
    const id = req.params.id.split(":").map(String)[1];
    console.log(id);
    const exist = await FlightModel.findOne({"_id":id});
    if(!exist){
         return res.status(401).send({ message: "Flight allredy deleted from flights" })
    }else{
        try {
            await FlightModel.findOneAndDelete({ "_id": id })
            return res.status(202).send({ message: "Flight deleted successfully" })
        } catch (error) {
            console.log(error)
            res.status(400).send({ "err": "Somthing went wrong" })
        } 
    }
}

