const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server)
const port = process.env.PORT || 4001;
const index = require("./routes/index");
const { companyStock, user, defaultUser } = require("./data")
const { token } = require("./loginDetails")
var request = require('request');
app.use(index);
// node app.js

const update = (str) => {
  console.log(str);
}

var requestOptions = {
  'url': `https://api.tiingo.com/iex/?tickers=sony,tsla,amzn,wmt,dis&token=${token}`,
  'headers': {
    'Content-Type': 'application/json'
  }
};

const findPrice = (item) => {
  companyStock.map(i => {
    if (i.tag === item.ticker)
      item.last !== 0 ? i.currentPrice = item.last : i.currentPrice = item.prevClose
  })
}

const int = (socket) => {
  request(requestOptions,
    function (error, response, body) {
      JSON.parse(body).map(item => {
        if (item.askSize !== null) {
          findPrice(item)
        } else {
          findPrice(item)
          clearInterval(interval)
          io.emit("closedMarkets", "Markets closed for today! Last prices are below:")
        }
      })
      io.sockets.emit("updateStock", companyStock)
    })
}

io.on("connection", (socket) => {
  console.log("running!")
  int(socket)

  io.emit("defaultUser", defaultUser)

  socket.on('updateUser', (e1, e2, e3) => {
    // update(e1)
    // update(e2)
    console.log(e3)
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
})

const interval = setInterval(() => {
  int()
}, 3500);

server.listen(port, () => console.log(`Listening on port ${port}`));