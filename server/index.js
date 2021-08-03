const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./config/db');



app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:true}));

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM movies;";
    db.query(sqlSelect, (err, result) => {
        res.send(result);

    });
});

app.post('/api/insert', (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    const starRating = req.body.starRating;

    const sqlInsert =
        "INSERT INTO movies (mname, mreview, rating) VALUES (?,?,?);";
    db.query(sqlInsert, [movieName, movieReview, starRating], (err, result) => {
        console.log("from express: ", result)
    });
});

app.put('/api/update', (req, res) => {
    const name = req.body.movieName;
    const reviewUpdate = req.body.movieReview;
    
    const sqlUpdate = "UPDATE movies SET mreview = ? WHERE mname = ?";
    db.query(sqlUpdate, [reviewUpdate, name], (err, result) =>{
       if(err) console.log(err)
    });
});

app.delete('/api/delete/:movieName', (req, res) => {
    const name = req.params.movieName;
    
    const sqlDelete = "DELETE FROM movies WHERE mname = ?";
    db.query(sqlDelete, name, (err, result) =>{
       if(err) console.log(err)
    });
});

app.listen(3001, () => {
    console.log('running 3001');
});