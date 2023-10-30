import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';



function SingleView() {

  const [contacts,setcontacts]=useState([])

  const param=useParams()
  // var name=param.name
  var {name}=param //destructuring


  const getdata=async()=>{
   const result=await axios.get('/db.json')
   setcontacts(result.data.contacts);
  }



  useEffect(()=>{
  getdata()
  },[])



console.log(name);
console.log(contacts);

//find single contact

const singlecontact=contacts.find(i=>i.name==name)
console.log(singlecontact);


  return (
    <div>
        {
          singlecontact?
          <Row>
            
            <Col lg={5}  sm={12} xs={12} md={6} className='py-5 ps-5  mb-5 mt-5'>
            <img src={singlecontact.profile} style={{height:'500px',width:'80%'}} />
            </Col>
            <Col  className='text-start '>
            <h1 className='text-center mt-3 me-5'>Details</h1>
    <ListGroup className='me-5 pe-5 w-100 fs-4'>
    <ListGroup.Item className='mt-5'><b><span>Name : {singlecontact.name}</span></b></ListGroup.Item>

      <ListGroup.Item className='mt-4'><b><span>Email : {singlecontact.email}</span></b></ListGroup.Item>
      <ListGroup.Item className='mt-4'><b><span>Mobile : { singlecontact.mobile}</span></b></ListGroup.Item>
      <ListGroup.Item className='mt-4'><b><span>Location : { singlecontact.location}</span></b></ListGroup.Item>
    </ListGroup>
    
            </Col>
          </Row>
          :
          <Row>
            <h1>no data</h1>
          </Row>
           
        }
    </div>
  )
}

export default SingleView