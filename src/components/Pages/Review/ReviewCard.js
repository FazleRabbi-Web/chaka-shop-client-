import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({reviewData}) => {
const {name,img,review} = reviewData;
    return (
        <div className="mb-5 col-lg-4 col-sm-6 ">
      <div className="card shadow-lg w-100 h-100 text-center rounded">
        <div className="d-flex justify-content-center align-items-center h-75 p-2">
          <img src={img} className="card-img-top " />
        </div>
        <div className="card-body">
          <h2 className="card-title text-uppercase fw-bold uppercase">
            {name}
          </h2>
          <p>{review}</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;