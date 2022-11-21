import React, { useState } from 'react'
import { FormGroup ,Form,Label,Input,Row,Container,Col,Button} from 'reactstrap';
const FormComp = () => {
  const [country, setCountry] = useState(null)
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(country)


}

  return (
    <div>
    <Container>

<Col>
<Form onSubmit={handleSubmit}>
    <Row>
   <Col sm={8}>
        <FormGroup floating>

    <Input
    onChange={(e)=>setCountry(e.target.value)}
      id="exampleSearch"
      name="search"
      placeholder="Enter Country"
      type="search"
    />
     <Label for="exampleSearch">
      Search
    </Label>
  </FormGroup>
   </Col>
   <Col sm={4}>

  <Button>
      Submit
    </Button>
   </Col>
    </Row>
        </Form>
</Col>
    </Container>
       
    </div>
  )
}

export default FormComp