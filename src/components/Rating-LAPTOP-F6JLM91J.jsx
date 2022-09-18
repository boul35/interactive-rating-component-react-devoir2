import React from 'react'
import { useState } from "react";
import Button from "./Button";

const Rating = ({className}) => {
    const [isHovered, setIsHovered] = useState(false);
     // On change l’état de isHovered à true
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);
 className = isHovered ? "Yes1" : "No1";
 return (
    
    <div
    className={className}
   
   onMouseEnter={onMouseEnter}
   onMouseLeave={onMouseLeave}>  <ul>
   <li className='btn'><Button number={1}/></li>
   
</ul>
</div> 
    );
   }

   

export default Rating