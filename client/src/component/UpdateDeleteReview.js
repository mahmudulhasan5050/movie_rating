import React, { useState } from 'react';
import movieAxiosFile from '../services/movieAxiosFile';

const UpdateDeleteReview = ({ movieList }) => {
    const [updateReviewText, setUpdateReviewText] = useState('');


    const updateHandler = (e) => {
        setUpdateReviewText(e.target.value);
    }
    const updateClickHandle = (movie) => {
        if (updateReviewText !== '') {
            const objReview = {
                movieName: movie,
                movieReview: updateReviewText
            }
            movieAxiosFile.updateReview(objReview);
        }
        setUpdateReviewText('');
    }

    const deleteHandle = (nameToDelete) => {
        movieAxiosFile.deleteMovie(nameToDelete);
    }

    return (
        <div>
            <div>
                <input type='text' value={updateReviewText} onChange={updateHandler} />
                <button onClick={() => updateClickHandle(movieList.mname)}>Update</button>
            </div>
            <div>
                <button onClick={() => deleteHandle(movieList.mname)}>Delete</button>
            </div>
        </div>
    )
}

export default UpdateDeleteReview;