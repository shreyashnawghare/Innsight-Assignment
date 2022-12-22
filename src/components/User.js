import React from 'react'
import './user.css'

 

const User = ({id,email,name,onDelete , city}) => {

    const handleDelete = () => {

        onDelete(id);
    }
    
   

  

     

    return (
        <div className='container'>
            <div className="card_item" key="{user.id}">
            
            <div className="card_inner">
            <span class="close-btn" onClick={handleDelete}>&times;</span>
            <img src={"images.jpg"} alt="" />
            <div className="userName">{name}</div>
            <div className="useUrl">{email}</div>
            <div className="usercity">{city}</div>
            </div>
            <div className="detail-box"></div>
            <button className="seeMore">See More</button>
            

                
               
               
           </div></div> 
       
    )
}

export default User
