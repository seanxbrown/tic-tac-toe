import React from 'react'
import Square from './Square';
import { Row } from "react-bootstrap"

const Gameboard = () => {
  return (
    <Row xs={3} className="h-100 w-100">
        <Square position={0} value={""}/>
        <Square position={1} value={""}/>
        <Square position={2} value={""}/>
        <Square position={3} value={""}/>
        <Square position={4} value={""}/>
        <Square position={5} value={""}/>
        <Square position={6} value={""}/>
        <Square position={7} value={""}/>
        <Square position={8} value={""}/>
    </Row>
  )
}

export default Gameboard