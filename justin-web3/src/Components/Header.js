import React, { useState } from 'react'
import { Avatar, Grid } from "@nextui-org/react";
import Azuki from "../images/azuki.jpg"
import Justin from "../images/linkedin.jpg"


function Header()   {
    return (
      <div className='Header'>
        <Avatar 
            circular
            src={Azuki}
            css={{ size: "10rem" }}
            />
        <Avatar 
            circular
            src={Justin}
            css={{ size: "10rem" }}
            />         
      </div>
    )
}


export default Header