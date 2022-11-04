import React from 'react'
import { Col } from "react-bootstrap"

const Square = ( { position, value, handleClick }) => {
  return (
    <Col className="border border-1 border-info square" onClick={() => handleClick(position)}>{value}</Col>
  )
}

export default Square