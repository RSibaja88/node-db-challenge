const express = require("express");

const db = require("../data/dbConfig");

const router = express.Router();


//Get projects
router.get("/", (req, res) => {
    db('projects')
    .then(projects => {
        res.json(projects);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET projects"}, err);
    });
});


module.exports = router;