import React from 'react'
import { Button} from 'reactstrap';
import { useStateContext } from '../context/StateProvider'
import { Link } from 'react-router-dom';
const TableRow = ({index}) => {
   
    const {country,setCountryIndex}=useStateContext()
 const el=country[index]
 const languages=el.languages

    var finalStr=Object.values(languages).join(",") 
  const handleClick=()=>{
setCountryIndex(index)
  }

  return (
    <>
         <tr>
      <th scope="row">
      {index +1}
      </th>
      <td>
      {el.name.common}
      </td>
      <td>
      {el.name.official}
      </td>
      <td>
      {finalStr}
      </td>
      <td>
      <Link to={`/country/${index}`}>
        <Button outline color="success">View</Button>

      </Link>
    
      </td>
    </tr>
    </>
  )
}

export default TableRow