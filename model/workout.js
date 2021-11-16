// dependencies for using mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// workout model
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{

        type: {
            type: String,
            trim: true,
            required: "Please enter the type of exercise."
        },

        name: {
            type: String,
            trim: true,
            required: "Please enter the name of your exercise."
        },

        duration: {
            type: Number,
            trim: true,
            required: "Please enter the duration you completed for our exercise."
        },

        weight: {
            type: Number,
            trim: true,
            required: "Please enter the weight you used for your exercise."
        },

        reps: {
            type: Number,
            trim: true,
            required: "Please enter how many reps you completed for your exercise."
        },

        sets: {
            type: Number,
            trim: true,
            required: "Please enter how many sets your completed for your exercise."
        },

        distance: {
            type: Number,
            trim: true,
            required: "Please enter the distance you completed for your exercise."
        }
    }],
}, 

{
    toJSON: {
        virtual: true
    }
}
);