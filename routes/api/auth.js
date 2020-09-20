const express = require("express");
const User = require("../../models/User");
const router = express.Router();
const auth = require("../../middleware/auth");

// @route    Get api/auth
// @des     Test route
// @access  Public
router.get("/", auth, (req, res) => {
  try {
    User.findById(req.user.id).then((user) => {
      res.json(user);
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
