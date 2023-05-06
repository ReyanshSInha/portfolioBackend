const express = require('express')
const router = express.Router()

const addConnectionRequest = require('../controllers/ConnectionRequests')

router.post('/sendConnectionRequest', addConnectionRequest)

module.exports = router