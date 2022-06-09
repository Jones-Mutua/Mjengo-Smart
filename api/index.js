const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const authRoutes = require("../api/routes/auth");
const blogs = require("./controllers/posts");
const cors = require('cors');
const morgan = require("morgan");
const {readdirSync} = require('fs');
const PORT = process.env.PORT || 2000;

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(() => {
  console.log("Connected to Database Successfully ...")
}).catch((error) => {
  console.log(error);
})



app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
// app.use('/api/blog', blogs);


console.log("All models were synchronized successfully.");
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

app.listen(PORT, () => {
    console.log(`Server Listening And Running On port  ${PORT}`);
  })