import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";
const About=()=>{
    return(
        <div>
        
            <UserContext.Consumer>
                {({user})=>(
                    <h5 className='p-10 font-serif text-red-700'>{user.name} - {user.email}</h5>
                )}
            </UserContext.Consumer>
            <ProfileClass name="Sudipta Class"/>
        </div>
    )
}
export default About;