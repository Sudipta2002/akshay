import { useEffect, useState } from "react";

const Profile = ()=>{

    const [count,setCount]=useState(0);
    useEffect(()=>{
        // console.log("Profile");
        // const timer = setInterval(() =>{
        //     console.log("Called in interval");
        // },1000);
        // return ()=>{
        //     console.log("useEffect return");
        // clearInterval(timer);// unmounting phase  
        // }  
    },[]); 
    return (
        <>
        <div>
            <h1>Profile Component</h1>
            <h3>Count: {count}</h3>
            <button onClick={()=> setCount(count+1)}>

            </button>
        </div>
        </>
    );
}

export default Profile;