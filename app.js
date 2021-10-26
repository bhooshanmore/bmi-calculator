// express is server
// body parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property
// winston - logging purposes

const express_server = require("express");
const cors = require("cors");
const body_parser = require("body-parser");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const app = express_server();
const utils = require("./utility/utility");

//Rate limiting configuration
const limiter = rateLimit({
  windowMs: process.env.LIMITER_RATE_MS,
  max: process.env.LIMITER_RATE_MAX,
});
app.use(limiter);
app.set("trust proxy ", 1);

app.use(body_parser.urlencoded({ extended: true }));
var fs = require("fs");

const server_port = process.env.PORT || 3000;
const host = process.env.HOST;

// swagger configuration
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./apidocs-swagger.json");
const customCss = fs.readFileSync(process.cwd() + "/swagger.css", "utf8");

// logger
const logger = utils.getLogger();

//Enable cors
app.use(cors());

app.use(
  express_server.json({
    inflate: true,
    limit: "200kb",
    reviver: null,
    strict: true,
    type: "application/json",
    verify: undefined,
  })
);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCss })
);

//Router
app.use("/api/", require("./routes/app-router"));

// Capture 500 errors
app.use((err, req, res, next) => {
  logger.info(next.HOST);
  res.status(500).send("Could not perform this action!");
  logger.error(
    `${err.status || 500} - ${res.statusMessage} - ${err.message} - ${
      req.originalUrl
    } - ${req.method} - ${req.ip}`
  );
});

// Capture 404 erors
app.use((req, res, next) => {
  logger.info(next.HOST);
  res.status(404).send("PAGE NOT FOUND");
  logger.error(
    `400 || ${res.statusMessage} - ${req.originalUrl} - ${req.method} - ${req.ip}`
  );
});

// Run the server
app.listen(server_port, () => {
  console.log("Server started...");
  logger.info(`Server started and running on http://${host}:${server_port}`);
});
