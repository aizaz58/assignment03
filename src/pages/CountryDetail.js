import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardBody, CardImg, Button, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, Modal, ModalHeader, ModalFooter, ModalBody, Badge } from 'reactstrap';
import { BsFillPinMapFill } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useStateContext } from '../context/StateProvider';
const CountryDetail = () => {
  const {id}=useParams()
  let currencies=""
  const {country}=useStateContext()
  const selectedCountry=country[id]
  console.log(selectedCountry.maps.openStreetMaps)
  for (const [key,value] of Object.entries(selectedCountry.currencies)) {
    currencies+=`${value.name}:${value.symbol}`
  }

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
  <Container>
<Col xs="12" md="6" >
    <Card>
    <CardImg
      alt="Card image cap"
      src={selectedCountry.flags.svg}
      top
      width="100%"
      
      />
      <CardBody>
      <ListGroup  horizontal>
    <ListGroupItem>
      Region
    </ListGroupItem>
    <ListGroupItem>
      {selectedCountry.region}
    </ListGroupItem>

    </ListGroup>
    <ListGroup horizontal>
    <ListGroupItem>
     Sub Region
    </ListGroupItem>
    <ListGroupItem>
      {selectedCountry.subregion}
    </ListGroupItem>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroupItem>
        Currencies
      </ListGroupItem>
      <ListGroupItem>
        {currencies}
      </ListGroupItem>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroupItem className='d-flex gap-2'>
        Location<BsFillPinMapFill/>
      </ListGroupItem>
      <ListGroupItem action
    className='d-flex justify-content-center'
      href={selectedCountry.maps.openStreetMaps}
      target="_black"
      tag="a">
        
     <FaMapMarkerAlt/>
      </ListGroupItem>
    </ListGroup>
    <ListGroup horizontal >
      <ListGroupItem >
        <ListGroupItemHeading>

       Languages 
        </ListGroupItemHeading>
      </ListGroupItem>
      <ListGroupItem>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      </ListGroupItem>
      </ListGroup>
      <ListGroup>
      <ListGroupItem>
        {Object.values(selectedCountry.languages).join()}
      </ListGroupItem>
    </ListGroup>
      </CardBody>
    </Card>
      </Col>


      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Badge
        className='lh-0 badge'
    color="secondary"
    pill
    
  >
  urdu <IoCloseCircleOutline className='close-icon'/>
  </Badge>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
         save
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>


  </Container>
    </div>
  )
}

export default CountryDetail