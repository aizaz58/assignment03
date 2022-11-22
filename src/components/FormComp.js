import React, { useState } from 'react'
import { FormGroup ,Form,Label,Input,Row,Container,Col,Button} from 'reactstrap';
import { useStateContext } from '../context/StateProvider';
const FormComp = () => {
  
  const [name, setname] = useState("")
  const {setCountry}=useStateContext()
   
const fetchData=async()=>{
  try {
      
      const res=await fetch(`https://restcountries.com/v3.1/name/${name}`)
      if(!res.ok){
          throw new Error(`Error occured of ${res.status} with message: ${res.statusText}` )
      }else{
          const data=await res.json()


          
          setCountry((prevData)=>[...prevData,...data])

     
          
      }
  } catch (error) {
      
  }
}
const handleSubmit=(e)=>{
  e.preventDefault()

fetchData()
setname("")
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
    onChange={(e)=>setname(e.target.value)}
      id="exampleSearch"
      name="search"
      placeholder="Enter Country"
      type="search"
      value={name}
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