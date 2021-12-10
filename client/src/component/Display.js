import React from 'react';
import StarView from './StarView';
import UpdateDeleteReview from './UpdateDeleteReview';

const Display = ({ movieLists, updateRefresh, setUpdateRefresh }) => {

    return (
        <div>
        <div>
            {movieLists.map(movieList => (
                <div key={movieList.mname + Math.random() * 1000} style={{
                    backgroundColor: 'gray', display: 'block',
                    margin: 'auto', width: '300px', height: '200px'
                }}>
                    <h3>{movieList.mname}</h3>
                    <p>{movieList.mreview}</p>
                    <div className="rateView">
                    <StarView rating={movieList.rating} />
                    </div>
                    <UpdateDeleteReview movieList={movieList} 
                    updateRefresh={updateRefresh}
                    setUpdateRefresh={setUpdateRefresh} />
                </div>
            )
            )}
        </div>
        </div>
    )
}

export default Display;