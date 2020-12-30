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
app.use(express.static('build'));

const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true
  }
});

io.on("connection", (socket) => {
  
    socket.on("update",(data)=>{console.log(data)});


    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });

  
server.listen(port, () => console.log(`Listening on port ${port}`));