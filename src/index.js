const { PORT } = require("./config/configEnv");
const bodyParser = require("body-parser");
const express = require("express");
const rentalsRoutes = require("./routes/rental.js");
const kostumRoutes = require("./routes/kostum.js");
const middlewarelogRequest = require("./middleware/logs.js");
const app = express();

app.use(middlewarelogRequest);
app.use(bodyParser.json());
app.use("/rentals", rentalsRoutes);
app.use("/kostum", kostumRoutes);

app.listen(PORT, () => {
  console.log("server berhasil dijalankan");
});
