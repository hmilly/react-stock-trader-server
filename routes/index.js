const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I'm Alive" }).status(200);
});

router.get("/user", (req, res) => {
  res.send({ response: "Hi" }).status(200);
});


module.exports = router;