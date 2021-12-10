const express = require('express');
const db = require('../config/db');
const router = express.Router();

router.get('/', (req, res) => {
    const sqlSelect = "SELECT * FROM movies;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

router.post('/movie-create', (req, res) => {
    const {movieName, movieReview, starRating} = req.body;

    const sqlInsert =
        "INSERT INTO movies (mname, mreview, rating) VALUES (?,?,?);";
    db.query(sqlInsert, [movieName, movieReview, starRating], (err, result) => {
        res.send(result);
    });
});

router.put('/update-review', (req, res) => {
    const {movieName, movieReview} = req.body;

    const sqlUpdate = "UPDATE movies SET mreview = ? WHERE mname = ?";
    db.query(sqlUpdate, [movieReview, movieName], (err, result) =>{
       if(err) console.log(err)
    });
});

router.delete('/movie-delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    
    const sqlDelete = "DELETE FROM movies WHERE mname = ?";
    db.query(sqlDelete, name, (err, result) =>{
       if(err) console.log(err)
    });
})

module.exports = router;