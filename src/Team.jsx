import { useState } from "react"

export default function(){
    const[team, teamFunction] = useState(11)
    const addTeam =()=>{
        const teamCount = team+1;
        teamFunction(teamCount)
    }
    const remove=()=>{
        const teamCount = team-1;
        teamFunction(teamCount);
    }
    return (
        
        <div>
            <h3>Team: {team}</h3>
            <button onClick={addTeam}>player  add</button>
            <button onClick={remove}>remove</button>
        </div>
    )
}