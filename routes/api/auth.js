const router = require("express").Router();

// @route		GET api/auth
// @desc		Test Route
// @access		Public
router.get("/", (req, res) => {
  res.send("Auth");
});

module.exports = router;
