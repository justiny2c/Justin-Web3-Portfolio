import React, { Component, useState } from 'react';
import './Header.css';
import { Container, Avatar, Row, Col} from "@nextui-org/react";
import Azuki from "../images/azuki.jpg";
import Justin from "../images/linkedin.jpg"
import { renderMatches } from 'react-router-dom';




class Header extends Component  {
    constructor(){
        super();
        this.state = {isHovered: false};
        this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
        this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    }

    onMouseEnterHandler() {
        this.setState({
            isHover: true
        });
    }

    onMouseLeaveHandler() {
        this.setState({
            isHover: false
        });
    }

    render(){
        return (
        <Container className='Header' xl>
            <Row justify="center" align="center" >
                <div onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                    <Col align="center" css={{width: "50vw"}} >      
                        {   this.state.isHover
                        ?   <div>
                                <Avatar 
                                    circular
                                    src={Azuki}
                                    css={{ size: "10rem", margin:"1rem",  }}
                                />
                                <p className='Name'>@delajusjus</p>
                            </div>
                        :   <div className='Name'>
                                <Avatar 
                                    circular
                                    src={Justin}
                                    css={{ size: "10rem", margin:"1rem" }}
                                    />
                                <p className='Name'>JUSTIN CHEN</p>
                            </div>
                        }
                    </Col>
                </div>
            </Row>        
        </Container>
        )
    }
}


export default Header