import React from 'react'
import {Link} from "react-router-dom"
const Title = () => {
    return (
      <Link to="/">
        <img className="h-16 p-2" alt="logo" src="https://img.restaurantguru.com/raa2-Taz-food-Plaza-and-Catring-services-chef.jpg" />
      </Link>
    ); 
  };
   const  Header = () => {
    return (
      <div className="flex justify-between bg-pink-200 shadow-lg">
        <Title />
        <div className="nav-items">
          <ul className='flex p-2 ml-3.5  space-x-6'>
           
            <li>
              <Link to="/">Home</Link> 
            </li>
              <li>
            <Link to="/about">
                About
            </Link> 
                </li>
            <li>Contact</li>
            <li>Cart</li> 
            <li>
            <Link to="/instamart">
                Instamart
            </Link> 
                </li>
          </ul>
        </div> 
      </div>
    );
  };
  export default Header;

