const express = require("express");
const connectDB = require("./config/db");
const app = express();

require("dotenv").config({
  path: "./config/config.env",
});

connectDB();
app.use(express.json());

const authRouter = require("./routes/auth.route");

app.use("/api/", authRouter);

app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Page Not Found",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
