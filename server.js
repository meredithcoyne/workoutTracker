const express = require("express");
const logger = require("logger");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// express middleware
const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

// add routes
app.use(require("./routes/html-routes.js"));
app.use(require("./routes/api-routes.js"));

// connect to db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});