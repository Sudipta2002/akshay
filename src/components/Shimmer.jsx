const Shimmer=()=>{
    return (
        <>
        <div className="flex flex-wrap bg-slate-400">
            { 
                Array(10).fill("").map((e,i)=>(
                    <div key={i} className="flex flex-wrap"> </div>
                ))
            }
        </div>
    </>
    
    );
}

export default Shimmer  ;