const express = require("express");
const cors = require("cors");
const compression = require("compression");
const welcome = require('./routes/welcome')
// const all_routes = require('./routes/index');
const rateLimit = require('express-rate-limit');
const { configDotenv } = require("dotenv");




const app = express();

configDotenv();

// Security middleware
//* Set CSP headers to allow authorized urls ****//
// app.use(helmet.contentSecurityPolicy({
//   directives: {
//     "script-src": ["'self'", "node.jobtiondevs.com"],
//   },
// }));

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // limit each IP to 100 requests per window
});
app.use(limiter);

//****compress all request and response */
app.use(compression());

// CORS middleware
app.use(cors({
  origin: [
    "http://localhost:8000",
    "https://votefave.fasthosttech.com"
  ],
  credentials: true,
}));

//******Default setting for expressJs */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//*****Welcome Page*/
app.use("/", welcome);

//****Routing all API routes */
// all_routes.forEach((value, key) => {
//     app.use('/api' + key, value)
// });

// Custom error-handling middleware
app.use((err, req, res, next) => {
  if (err.status === 503) {
    res.status(503).json({ error: "Service Unavailable" });
  } else {
    next(err);
  }
});


module.exports = app;