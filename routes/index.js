const express = require("express");
const { default: next } = require("next");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello akshay");
});

module.exports = router;