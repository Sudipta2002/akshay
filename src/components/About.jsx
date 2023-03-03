import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
const About=()=>{
    return(
        <div>
            <h1>About</h1>
            <ProfileClass name="Sudipta Class"/>
        </div>
    )
}

export default About;