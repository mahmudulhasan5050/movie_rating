const express = require('express');
const cors = require('cors');
const app = express();
const moviesRouter = require('./routes/movies')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/movies', moviesRouter)


app.listen(3001, () => {
    console.log('running 3001');
});