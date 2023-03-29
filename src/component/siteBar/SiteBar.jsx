import React, { useEffect, useState } from "react";

const SiteBar = ({witchVideo}) => {
    const [witchTime , setWitchTime] = useState(witchVideo)
    const totalWitchTime = (addBt)=>{
        const totalTime= witchTime +addBt
        setWitchTime(totalTime)
    }
    console.log(witchTime)
   useEffect(()=>{
    const total = witchTime + witchVideo
    setWitchTime(total)
   },[witchVideo]) 
    const [breakTime, setBreakTime] = useState(0)
    const addBreakTime = (time)=>{
        localStorage.setItem('breakTime', time)
       setBreakTime(time)
    }
  return (
    <div className="py-3">
      <div className="mb-5">
        <h4>Total Watch Time</h4>
        <input
          type="text"
          className="py-1 rounded border border-info px-2"
          value={witchTime}
        />
      </div>
      <div>
        <h2>Add Break Time</h2>
        <button onClick={()=> {addBreakTime(15)}} className="bg-primary border border-none px-3 py-2 rounded-3 ms-1">15</button>
        <button onClick={()=> {addBreakTime(20)}} className="bg-warning border border-none px-3 py-2 rounded-3 ms-1">20</button>
        <button onClick={()=> {addBreakTime(30)}} className="bg-danger border border-none px-3 py-2 rounded-3 ms-1">30</button>
        <input type="text" className="py-1 rounded border border-none px-2 mt-2"  value={breakTime} />
      </div>
     

      <button onClick={()=> totalWitchTime(breakTime)} className="bg-primary w-100 text-light py-2  border border-none rounded-3">Complete</button>
      
    </div>
  );
};

export default SiteBar;
