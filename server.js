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

// connect to db

// start server