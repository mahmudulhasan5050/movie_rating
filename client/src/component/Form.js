import React, { useState } from 'react';
import StarRate from './StarRate';
import movieAxiosFile from '../services/movieAxiosFile';



const Form = ({ movieName,
    setMovieName,
    review,
    setReview,
    movieLists,
    setMovieLists }) => {
    const [starRate, setStarRate] = useState(null);

    const movieNameHandler = (e) => {
        setMovieName(e.target.value);
    }
    const reviewHandler = (e) => {
        setReview(e.target.value)
    }
    const submitHandle = (e) => {
        e.preventDefault();
        if (movieName !== "") {
            const obj = {
                movieName: movieName,
                movieReview: review,
                starRating: starRate
            }

            movieAxiosFile.createReview(obj);

            setMovieLists([
                ...movieLists, {
                    mname: movieName,
                    mreview: review,
                    rating: starRate
                }
            ]);
            setMovieName("");
            setReview("");
            setStarRate(null)
        }
    }

    return (
        <div className="form">
            <label>Movie Name</label>
            <input value={movieName} type="text" name="movieName" onChange={movieNameHandler} ></input>
            <label>Review</label>
            <input value={review} type="text" name="review" onChange={reviewHandler}></input>
            <StarRate starRate={starRate} setStarRate={setStarRate} />
            <button onClick={submitHandle}>Submit</button>
        </div>
    )
}
export default Form;