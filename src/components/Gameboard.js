import React from 'react'
import Square from './Square';
import { Row } from "react-bootstrap"

const Gameboard = ({ handleClick, gameboard}) => {
  return (
    <Row xs={3} className="h-100 w-100">
        <Square position={[0, 0]} value={gameboard[0][0]} handleClick={handleClick} />
        <Square position={[0, 1]} value={gameboard[0][1]} handleClick={handleClick}/>
        <Square position={[0, 2]} value={gameboard[0][2]} handleClick={handleClick}/>
        <Square position={[1, 0]} value={gameboard[1][0]} handleClick={handleClick}/>
        <Square position={[1, 1]} value={gameboard[1][1]} handleClick={handleClick}/>
        <Square position={[1, 2]} value={gameboard[1][2]} handleClick={handleClick}/>
        <Square position={[2, 0]} value={gameboard[2][0]} handleClick={handleClick}/>
        <Square position={[2, 1]} value={gameboard[2][1]} handleClick={handleClick}/>
        <Square position={[2, 2]} value={gameboard[2][2]} handleClick={handleClick}/>
    </Row>
  )
}

export default Gameboard