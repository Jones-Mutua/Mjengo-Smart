const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const authRoutes = require("../api/routes/auth");
const blogs = require("./controllers/posts");
const cors = require('cors');
const morgan = require("morgan");

const PORT = process.env.PORT || 2000;

const app = express();

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected to Database")
}).catch((error) => {
  console.log(error);
})



app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use('/api/blog', blogs);


app.listen(PORT, () => {
    console.log('Server Listening And Running On port  2000');
  })