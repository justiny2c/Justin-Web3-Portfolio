import React, { useState } from 'react'
import { Container, Avatar, Row, Col} from "@nextui-org/react";
import Azuki from "../images/azuki.jpg"
import Justin from "../images/linkedin.jpg"


function Header()   {
    return (
      <Container className='Header' xl>
          <Row justify="center" align="center" >
            <Col align="center" css={{width: "15rem"}}>      
                <Avatar 
                    circular
                    src={Justin}
                    css={{ size: "10rem", margin:"1rem" }}
                    />
                <h2>Web2</h2>
            </Col>
            <Col align="center" css={{width: "15rem"}}>    
                <Avatar 
                    circular
                    src={Azuki}
                    css={{ size: "10rem", margin:"1rem",  }}
                    />
                <h2>Web3</h2>
            </Col>          
          </Row>        
      </Container>
    )
}


export default Header