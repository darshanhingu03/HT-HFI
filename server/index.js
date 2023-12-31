require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/api.route.js");
const authRouter = require("./routes/auth/auth.route.js");
const connectDatabase = require("./utils/condb.js");

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));
app.use("/", router);
// app.use("/auth", authSignupRouter);
app.use("/auth", authRouter);
app.use("/api", require("./routes/index.js"));

app.all("*", (req, res) =>
  res.status(404).json({
    message: "Not Found",
    status: 404,
  })
);

connectDatabase(process.env.DATABASE_URI);

const PORT = process.env.PORT || 8080;
app.listen(PORT, "192.168.1.29", () =>
  console.log(`Server listening on port : ${PORT}`)
);
