import React, { useState } from 'react'
import { Container, Avatar, Row} from "@nextui-org/react";
import Azuki from "../images/azuki.jpg"
import Justin from "../images/linkedin.jpg"


function Header()   {
    return (
      <Container className='Header' xl>
          <Row justify="center">      
            <Avatar 
                circular
                src={Justin}
                css={{ size: "10rem", margin:"1rem" }}
                /> 
            <Avatar 
                circular
                src={Azuki}
                css={{ size: "10rem", margin:"1rem" }}
                />        
          </Row>        
      </Container>
    )
}


export default Header