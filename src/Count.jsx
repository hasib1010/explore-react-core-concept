import { useState } from "react"

export default function Count(){
    const [count, setCount]= useState(0);
        const handleCount =()=>{
            const newCount = count + 1;
            setCount(newCount);
        }
        const handleCount2=()=>{
            const newCount = count-1;
            setCount(newCount)
        }
    return(
        <div>
            <h4>
                count: {count} 
            </h4>
            <button onClick={handleCount}>Increase Count</button>
            <button onClick={handleCount2}>Decrease Count</button>
        </div>
    )
}