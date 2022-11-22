import React from 'react'
import { Button} from 'reactstrap';
import { useStateContext } from '../context/StateProvider'

const TableRow = ({index}) => {
    let langStr=""
    let comma=""
    const {country}=useStateContext()
 const el=country[index]
 const languages=el.languages
 for (const [key,value] of Object.entries(languages)) {
     langStr+=`${value} `
     comma= langStr.replace(/\s/gi,",")
    }
    var finalStr=comma.slice(0,-1) 
  
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
        <Button outline color="success">View</Button>
    
      </td>
    </tr>
    </>
  )
}

export default TableRow