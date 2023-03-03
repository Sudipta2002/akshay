import React from 'react'

const RestrauntCard = ({name,cloudinaryImageId,area,avgRating,cuisines}) => {
    return (
  
      <div className="w-[300px] p-5 m-5 shadow-lg bg-red-50">   
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>      
        <h2 className='font-bold 2xl font-serif'>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating}</h4>
      </div>
  
    );
  }

export default RestrauntCard