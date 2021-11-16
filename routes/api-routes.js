// dependencies
const db = require("../models");
const router = require("express").Router();


// GET Route
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// PUT route to add exercises
router.post("/api/workouts/:id", ({body, params}, res) => {

});

// POST route
router.get("/api/workouts", ({body}, res) => {

});

router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;