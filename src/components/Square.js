import React from 'react'
import { Col } from "react-bootstrap"

const Square = ( { position }) => {
  return (
    <Col className="border border-1 border-info square">{position}</Col>
  )
}

export default Square