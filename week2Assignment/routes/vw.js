//creating a route thru express

let express = require('express')
let router = express.Router()

router.get('/vw', (req, res) => { 
    res.send('You have requested an vw')
})

module.exports = router