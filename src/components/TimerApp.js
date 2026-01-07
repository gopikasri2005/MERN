import React, { useEffect, useState } from 'react'

function TimerApp() {
    //  state to store the seconds value
    const [seconds,setSeconds]=useState(0);
    // state to check whether the timer is running or not
    const[running,setRunning]=useState(false);
    useEffect(()=>{
        let timer;
        if(running)
        {
            timer=setInterval(()=>{
              setSeconds(prev=>prev+1);
            },1000);
        }return ()=> clearInterval(timer);
    },[running]
);
  return (
    <div >        
        <h2>Timer application</h2>
        <p>{seconds}seconds</p>
        <button onClick={()=>setRunning(true)}>Start</button>
         <button onClick={()=>setSeconds(0)}>Reset</button>
          <button onClick={()=>setRunning(false)}>End</button>
    </div>
  );
}

export default TimerApp