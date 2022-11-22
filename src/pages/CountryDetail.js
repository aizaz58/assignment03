import React from 'react'
import { useParams } from 'react-router-dom';
import { Card, CardImg, Container } from 'reactstrap';
import { useStateContext } from '../context/StateProvider';
const CountryDetail = () => {
  const {index}=useParams()
  const {country}=useStateContext()
  const selectedCountry=country[0]
  console.log(selectedCountry)
  const ab={tuk:"zuban"}
  Object.assign(country[0].languages,ab)
  console.log(country[0].currencies[0].name)
  return (
    <div>
  <Container>

    <Card>
    <CardImg
      alt="Card image cap"
      src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
      top
      width="100%"
      
    />
    </Card>
  </Container>
    </div>
  )
}

export default CountryDetail