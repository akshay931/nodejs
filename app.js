const express = require("express");
const http = require("http");
var cors = require('cors');
const index = require("./routes/index");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;
//-------------------------------------------------------------------------
app.use(cors());
// app.use('/',index);
app.use(express.static('./out/'));

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("user connected");
    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  
server.listen(port, () => console.log(`Listening on port ${port}`));