import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Stars = ({ rating }) => {

    const ratingStars = []

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            ratingStars.push(<FontAwesomeIcon className='icon' icon={faStar} style={{color: "#ff6060"}} />)
        } else {
            ratingStars.push(<FontAwesomeIcon className='icon' icon={faStar} style={{color: "f6f6f6"}} />)
        }
    }

    return ratingStars.map((star, index) => (
        <div key={`star-${index}`} className="etoiles__content">{star}</div> 
    ))
};


export default Stars;