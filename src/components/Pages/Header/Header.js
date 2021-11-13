import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header  text-white'>
           <div className='container'>
           <div>
                <h1 className='text'>POWER AND BEAUTY</h1>
                <p>Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction</p>
                <Link to="/vehicles">
                    <button className="btn btn-danger me-2 fw-bold">
                      VEHICLES
                    </button>
                  </Link>
            </div>
            <div>
                <img className='w-50 my-auto align-middle float-end ' src="https://unicoderbd.com/theme/html/chaka/assets/images/slider/car.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Header;