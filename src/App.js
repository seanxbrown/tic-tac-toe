import { Container } from "react-bootstrap";
import Gameboard from "./components/Gameboard";
import { useState } from "react"


function App() {
  const [gameboard, setGameBoard] = useState([[null, null, null], [null, null, null], [null, null, null]])
  const [turn, setTurn] = useState("x")

  function handleClick(positionArray) {

    const [row, column] = positionArray


    if (gameboard[row][column] ===  null) {
      const newGameboard = [...gameboard];
      newGameboard[row][column] = turn
      setGameBoard(newGameboard)
      turn === "x" ? setTurn("o") : setTurn("x")
      console.log(row, column)

    }

  }


  return (
    <Container fluid>
      <h1>Tic Tac Toe Game</h1>
      <Container className="vh-100 vw-100">
        <Gameboard handleClick={handleClick} gameboard={gameboard}/>
      </Container>

    </Container>
  );
}

export default App;
