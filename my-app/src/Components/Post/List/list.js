import React, {useState} from "react";
import './list.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../images/circle.svg";
import camera from "../../../images/camera.png";
import share from "../../../images/share.png";
import heart from "../../../images/heart.png";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Header from "../Header/Header";




export default function List(){
  
    return(
        <>
        <Header/>
            
<div className="list-post-container ">
    <div className="row m-3">
            <div className=" col-10">
            <Card className="text-centre">
      <Card.Header className="card-header" >
            <div col-5>
                <h4>Siva</h4>
                <label>Bengaluru</label>
            </div>

            <div col-5>
                <span className="dot">&#9679;&#9679;&#9679;</span>
            </div>
      </Card.Header>
      <Card.Body className="card-body">
        <img src="https://images.unsplash.com/photo-1674813800326-f09a34528d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"/>
      </Card.Body>
      <Card.Footer className="card-footer">
        <div className="wrapper">
        <div className="col-5">
      <img src={heart} alt="heart"/>
                <img src={share} alt="share"/>
                <p>64 likes</p>
                </div>
                <div className="col-5">
                <span className="date">30 Mar-2023</span>
            </div>
            </div>

            <div className="col-12 d-block">
              <h3>hello from himanshu</h3>
            </div>
      </Card.Footer>
    </Card>
            </div>
          </div>

          </div>
            </>   
    )
}