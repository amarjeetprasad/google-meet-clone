require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();

const Routes = require("./app/routes");

app.use([
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);
app.use(cors());


const server = http.createServer(app);

const io = (module.exports.io = require("socket.io")(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
}));
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});