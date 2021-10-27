const express_server = require("express");
const router = express_server.Router();
const utils = require("../utility/utility");
const logger = utils.getLogger();
const apicache = require("apicache");
require("dotenv").config();

//Initialize cache
let cache = apicache.middleware;

router.post("/bmi/", cache(process.env.API_CACHE), function (req, res) {
  if(isEmpty(req.body)) {
    console.log('Object missing');
    res.status(500).send("Could not perform this action,request is empty !");
  }
  try {
    logger.log({ message: "srtart : /api/bmi is called ", level: "info" });
    var result = utils.calculate_bmi(req);

    if (process.env.NODE_ENV !== "production") {
      logger.log({ message: result, level: "info" });
    }

    logger.log({ message: "End : /api/bmi is called ", level: "info" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

function isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

router.get("/status/", (req, res) => {
  res.send("server is running");
});

module.exports = router;
