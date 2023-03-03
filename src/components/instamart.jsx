import { useState } from "react";
const Section = ({title, description,isVisible,setIsVisible}) => {
    return (
        <div className="border border-black p-2 m-2">
            <h3>{title}</h3>
            {isVisible? (
                <button onClick={() => setIsVisible(false)}
                className="cursor-pointer underline">
                    Hide
                </button>
            ):(
                <button
                onClick={()=> setIsVisible(true)}
                className="cursor-pointer underline">
                    Show
                </button>
            )} 
           {isVisible && <p>{description}</p>}
        </div>
    );
};
const instamart = ()=>{
    const [visibleSection, setIsVisibleSection]=useState("");
    return( <div>
        <Section 
        title={"About Instamart"}
        description={"This is the About page of Instamart"}
        isVisible={visibleSection==="about"}
        setIsVisible={(e)=>{e?setIsVisibleSection("about"):setIsVisibleSection("")}}
        />
        <Section 
        title={"Team Instamart"}
        description={"This is the Team Section of Instamart"}
        isVisible={visibleSection==="team"}
        setIsVisible={(e)=>{e?setIsVisibleSection("team"):setIsVisibleSection("")}}
        />
        <Section 
        title={"Career Instamart"}
        description={"This is the Career details page of Instamart"}
        isVisible={visibleSection==="career"}
        setIsVisible={(e)=>{e?setIsVisibleSection("career"):setIsVisibleSection("")}}
        />
    </div>);
}
export default instamart;