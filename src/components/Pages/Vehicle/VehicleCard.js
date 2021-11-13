import React from "react";
import { Link } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {
  const { name, _id, description, price, img } = vehicle;
  return (
    <div className="mb-5 col-lg-4 col-sm-6 ">
      <div className="card shadow-lg w-100 h-100 text-center rounded">
        <div className="d-flex justify-content-center align-items-center h-75 p-2">
          <img src={img} className="card-img-top h-75 w-75" alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-uppercase fw-bold uppercase">
            {name}
          </h2>
          <h5 className="text-info fw-bold">{price}</h5>
        </div>
        <div className="card-footer">
          <div className="d-flex align-items-center justify-content-between ">
            <Link to={`/vehicle/${_id}`}>
              <button className="btn px- fw-bold btn-warning">View Detail</button>
            </Link>
            <Link to={`/order/${_id}`}>
              <button className="btn fw-bold btn-success">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
