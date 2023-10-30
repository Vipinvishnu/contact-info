import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './header.css'

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-uAujr2CgDoDx8C5JnJgXSMplsHAFEPQ0WA&usqp=CAU"
              width="70"
              height="70"
              className="d-inline-block align-top  "
            />{' '}
          <b className='fs-2 ms-3' > <span className='text-secondary'>C</span>ONTACT-<span className='text-secondary'>I</span>NFO</b> 
         
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header