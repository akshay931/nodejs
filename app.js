const express = require("express");
const fetch = require('node-fetch');
const http = require("http");
var cors = require('cors');
const index = require("./routes/index");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;
//-------------------------------------------------------------------------
app.use(cors());

app.use('/api/',(req,res)=>{
  res.json({data:'this is from server'});
});
// var mongoClient = require("mongodb").MongoClient;
// mongoClient.connect("mongodb://my-database:fs1NGabv1jJbPG5qI8NvWmJvZyRVehxNuQnBbwhxBvvbJg9kAYFZimnRzq7lD1aV1cBzzkrIGdBeWaUWRt7uNA==@my-database.mongo.cosmos.azure.com:10255/?ssl=true&appName=@my-database@", function (err, db) {
//   db.close();
// });
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

