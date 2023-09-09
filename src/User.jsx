import { useEffect, useState } from "react"
import Userdata from "./Userdata";

export default function(){
    const [user,  userFunction] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userFunction(data));
    }, [])
    return(
        <div>
            <h4>user: {user.length}</h4>
            {
                user.map(userData=> <Userdata user = {userData}></Userdata>)
            }
        </div>
    )
}