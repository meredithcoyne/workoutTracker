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
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: {exercise: body}},
        {new: true }
    ).then(dbWorkout => {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
});

// POST route
router.get("/api/workouts", ({body}, res) => {
    db.Workout.create({body})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(5)
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;