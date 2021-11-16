// depencies for using mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// workout model
const workoutSchema = new Schema({
            day: {
                type: Date,
                default: Date.now,
            },

            excersise: [{
                type: {
                    type: ,
                    trim: ,
                    required: ""
                },

                name: {
                    type: ,
                    trim: ,
                    required: ""
                },

                duration {
                    type: ,
                    trim: ,
                    required: ""
                },

                weight: {
                    type: ,
                    trim: ,
                    required: ""
                },

                reps: {
                    type: ,
                    trim: ,
                    required: ""
                },

                sets: {
                    type: ,
                    trim: ,
                    required: ""
                },

                distance: {
                    type: ,
                    trim: ,
                    required: ""
                }

            }],
        },
    },

    {
        toJSON: {
            virtuals: true
        }
    }
);