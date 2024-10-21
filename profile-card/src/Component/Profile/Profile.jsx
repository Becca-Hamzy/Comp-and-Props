import David from "../../assets/svg/David.webp"
import Button from "../Button/Button"

import "./profile.css"

const Profile = (props) => {
    return(
       <div className="profile" >
             <img src= {props.img} alt="" />

             <div className="text" id={props.id}>

             <p> {props.name}</p>
             <p>{props.age}</p>
             <p>{props.location}</p>
             <button onClick = {props.onclick}> DArkmode</button>
             
             </div>
            
       
       </div>

    )

}
export default Profile

