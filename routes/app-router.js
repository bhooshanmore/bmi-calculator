
const express_server = require('express');
const router = express_server.Router();
const utils = require('../utility/utility');
const logger = utils.getLogger();
const apicache = require('apicache')
var donenv = require('dotenv').config();

//Initialize cache
let cache = apicache.middleware

router.post('/', cache(process.env.API_CACHE), function (req, res) {
    try {
        logger.log({ message: 'srtart : /api/bmi is called ', level: 'info' })
        var result = utils.calculate_bmi(req)
        
        if(process.env.NODE_ENV !== 'production'){
            logger.log({ message: result  , level: 'info' })
        }

        logger.log({ message: 'End : /api/bmi is called ', level: 'info' })
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error);
    }


})



module.exports = router;


