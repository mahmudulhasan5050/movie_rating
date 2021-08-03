import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRate = ({ starRate, setStarRate }) => {

    const [hover, setHover] = useState(null);



    return (
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
                                onClick={() => setStarRate(starValue)} />
                            <FaStar
                                className="star"
                                size={20}
                                color={starValue <= (hover || starRate) ? "#ffc107" : "#e4e5e9"}
                                onMouseEnter={() => setHover(starValue)}
                                onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    </div>
                )
            })}

        </div>
    )
}

export default StarRate;