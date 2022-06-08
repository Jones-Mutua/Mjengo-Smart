const express = require('express');
const cors = require('cors');
const mysql = require("mysql2");
const dotenv = require('dotenv');
const database = require("./config/db.config");
// const routes = require('./routes/route');

const {readdirSync} = require('fs');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;




// app.use('/api', routes)

app.use(cors());
app.use(express.json());

console.log("All models were synchronized succ/apiessfully.");
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

app.listen(PORT, () => {
    console.log(`Server Running and Listening on Port ${PORT}`);
});