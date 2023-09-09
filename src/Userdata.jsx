export default function Userdata({user}){
   
    const {name , email}= user;
     
    return(
        <div>
            <h3>UserName: {name}</h3>
            <p>email: {email} </p>
        </div>
    )
}