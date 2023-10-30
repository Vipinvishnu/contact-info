import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Home() {

  const [contacts, setContacts] = useState([])



  const getAllContact = async () => {
    const result = await axios.get('/db.json')
    setContacts(result.data.contacts);
  }

  useEffect(() => {
    getAllContact()
  }, [])
  console.log(contacts);

  return (
    <Container>
      <Row>
        {
          contacts.length > 0 ? contacts.map(i =>

            <Col xs={12} sm={4} lg={4} md={4}>
              <Link to={`/view/${i.name}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem', height: '500px' }} className='m-5 '>
                  <Card.Img
                    style={{ height: '400px' }}
                    variant="top" src={i.profile} />
                  <Card.Body>
                    <b><Card.Title className='text-center text-secondary'>{i.name}</Card.Title></b>
                    <Card.Text className='text-white'>
                      <b className='text-primary'>Title</b> :
                      <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

          ) : <h1> No Data Present </h1>
        }
      </Row>
    </Container>
  )
}

export default Home