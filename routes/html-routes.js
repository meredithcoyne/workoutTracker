// dependencies
const path = require("path");
const router = require("express").Router();

// GET routes to direct to HTML page in public folder
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", function (req, res){
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", function (req, res){
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;

