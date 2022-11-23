import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'
import {Badge} from 'reactstrap'
const BadgeComp = ({lang}) => {
  return (
    <>
        <Badge
        className='lh-0 badge'
    color="secondary"
    pill
    
  >
  {lang} <IoCloseCircleOutline className='close-icon'/>
  </Badge>
    </>
  )
}

export default BadgeComp