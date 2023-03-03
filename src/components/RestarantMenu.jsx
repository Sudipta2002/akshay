import React, { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
const RestarantMenu = () => {
  const { id } = useParams();
    // const [res,setRes]=useState({});
    const res = useRestaurant(id);
    // useEffect(()=>{
    //     getResInfo();
    // },[]);

    // async function getResInfo() {
    //     const data= await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=21.1702401&lng=72.83106070000001&menuId=${id}`)
    //     const json= await data.json();
    //     setRes(json.data);
    // }

    if(!res)return null;
    if(!res.menu)return null;

  return (
    <div className="menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h1>{res.name}</h1>
        <img alt="food pic" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+res.cloudinaryImageId}></img>
        <h3>{res.area}</h3>
        <h3>{res.city}</h3>
        <h3>{res.avgRating}stars</h3>
        <h3>{res.costForTwo}</h3>
      </div>
      <div>
        {/* {console.log(Object.values(res.menu.items))} */}
        
         <h1>Menu</h1>
         <ul>
            {Object.values(res.menu.items).map((i)=>
                // console.log(i.name)
                <li key={i.id}>{i.name}</li>
            )}
         </ul>
      </div>
    </div>
  );
};

export default RestarantMenu;
