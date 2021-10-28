const express_server = require("express");
const router = express_server.Router();
const utils = require("../utility/utility");
const logger = utils.getLogger();
const apicache = require("apicache");
require("dotenv").config();

//Initialize cache
let cache = apicache.middleware;

router.post("/bmi/", cache(process.env.API_CACHE), function (req, res) {

  try {
    logger.log({ message: "srtart : /api/bmi is called ", level: "info" });
    logger.log({ message: req.body, level: "info" });
    logger.log({ message: req, level: "info" });
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


router.get("/status/", (req, res) => {
  res.send("server is running");
});

module.exports = router;
