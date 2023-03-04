import React,{ useContext } from 'react'
import UserContext from '../utils/UserContext';
const Footer = () => {
  const {user}=useContext(UserContext); 
    return(
      <div className=' bg-pink-200 shadow- h-20'>

        <h1 className='p-10 font-serif text-red-700'>{user.name} - {user.email}</h1>
      </div> 
    );
};

export default Footer