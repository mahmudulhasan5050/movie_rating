import React, { useState } from 'react';
import movieAxiosFile from '../services/movieAxiosFile';

const UpdateDeleteReview = ({ movieList, updateRefresh, setUpdateRefresh }) => {
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
            setUpdateReviewText('');
            setUpdateRefresh(!updateRefresh);
        }
    }

    console.log(updateRefresh)
    const deleteHandle = (nameToDelete) => {
        movieAxiosFile.deleteMovie(nameToDelete);
        setUpdateRefresh(!updateRefresh);
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