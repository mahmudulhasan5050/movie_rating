import React, { useState, useEffect } from 'react';
import './App.css';
import movieAxiosFile from './services/movieAxiosFile';


import Form from './component/Form';
import Display from './component/Display';

function App() {
  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');
  const [movieLists, setMovieLists] = useState([]);


 // console.log("movie name from app.js: ", movieName);
 // console.log("movie review from app.js: ", review);
 // console.log("movie list from app.js: ", movieLists);

  useEffect(() => {
    movieAxiosFile.getAll().then(response => {
      setMovieLists(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div><h1>Movie Rating App</h1></div>
      <Form
        movieName={movieName}
        setMovieName={setMovieName}
        review={review}
        setReview={setReview}
        movieLists={movieLists}
        setMovieLists={setMovieLists} />
      <Display movieLists={movieLists}/>
    </div>
  );
}

export default App;
