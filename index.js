const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env || 3001;
const path = require('path');

if(process.env.NODE_ENV==='production'){
  app.use(express.static(path.join(__dirname,'client/built')))
}

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}. Ready to accept requests!`);
});
