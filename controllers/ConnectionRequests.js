const ConnectionRequests = require("../models/ConnectionRequests")

const addConnectionRequest = async (req, res) => {
    const {UserName, Email, Knowm, Why} = req.body
    console.log(req.body)
    const tempConnectionRequest = { UserName, Email, Knowm, Why }

    const connectionRequest = await ConnectionRequests.create({...tempConnectionRequest})
    console.log({connectionRequest})
    res.status(201).json({ connectionRequest })
}

module.exports = addConnectionRequest