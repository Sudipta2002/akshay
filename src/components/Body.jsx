import React, { useState,useEffect } from "react";
import RestrauntCard from "./RestrauntCard";
import restaurentList from "../../data";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filter(searchData,restaurants){
    const filterData = restaurants.filter((res)=>res.data.name.toLowerCase().includes(searchData.toLowerCase()));
    console.log(filterData);
    return filterData;
}


//https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING
const Body = () => { 
    const [search, setSearch] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);
    useEffect(() => {
      getRestaurants();
    }, [])
    async function getRestaurants(){
      try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      } catch (error) {
        console.log(error);
      }
    }  
    // if my restaurant is empty show shimmer UI
     if(!allRestaurants) return null;// early return
    
    return allRestaurants.length===0? (<Shimmer/>):(
    <>
      <div className="search-container p-5 bg-pink-50 my-5 shadow-md ">
        <div className="search">
          <input className="rounded-lg shadow-2xl shadow-red-300 focus:bg-green-100 p-2 m-2" type="text" placeholder="Search"  value={search} onChange={(e)=>{
                setSearch(e.target.value);
          }}/>
          <button className="search-btn p-2 m-2 bg-red-800 text-white border-r-emerald-500 rounded-xl" onClick={()=>{
            const data= filter(search,allRestaurants);
            setRestaurants(data);
          }}> Search</button>
        </div>
      </div>
      <div className="flex flex-wrap"> 
        {restaurants?.length==0?(<h1>No Restaurant to filter</h1>):( 
          restaurants.map((restraunt) => {
            return(<Link to={"restaurant/"+restraunt.data.id}> <RestrauntCard key={restraunt.data.id} {...restraunt.data} /></Link>);
          })
        )}
      </div>
    </>
  );
};
export default Body;
