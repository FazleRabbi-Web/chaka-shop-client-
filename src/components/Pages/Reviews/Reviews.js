import React, { useEffect, useState } from 'react';
import ReviewCard from '../Review/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center mb-4'>Happy Client <span className='text-danger'>Reviews</span></h1>
            <div className='row'>
                {
                    reviews.map(reviewData => (
                        <ReviewCard
                        key={reviewData._id}
                        reviewData={reviewData}
                        ></ReviewCard>))
                }
            </div>
        </div>
    );
};

export default Reviews;