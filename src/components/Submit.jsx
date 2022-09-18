import React from 'react'
import { useState } from "react";

const Submit = ({className}) => {
    const [isHovered, setIsHovered] = useState(false);
     // On change l’état de isHovered à true
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);
 className = isHovered ? "Yes" : "No";
 return (
    
    <div
    className={className}
   
   onMouseEnter={onMouseEnter}
   
   onMouseLeave={onMouseLeave}><button className='btn-submit'>Submit</button></div>
    );
   }

   

export default Submit