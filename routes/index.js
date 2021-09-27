const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  res.send({ response: "I'm Alive" }).status(200);
});

router.post("/", (req, res) => {

  try { fs.writeFileSync(`./data.js`, { ...req.body }) }
  catch (error) { console.log(error) }

  res.send(req.body).status(200)
  return
});





module.exports = router;