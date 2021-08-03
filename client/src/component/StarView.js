import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarView = ({rating}) => {

    const rateState = rating;
    return (
        <div style={{margin: '0 0 0 5px'}}>
        <div id="starAlign">
            {[...Array(5)].map((star, i) => {
                const starValue = i + 1;
                return (
                    <div key={starValue + Math.random()}>
                        <label>
                            <input
                                type="radio"
                                name="rating"
                                value={starValue}
                            />
                            <FaStar
                                className="star"
                                size={20}
                                color={starValue <= (rateState) ? "#ffc107" : "#e4e5e9"}
                            />
                        </label>
                    </div>
                )
            })}

        </div>
        </div>
    )
}

export default StarView;