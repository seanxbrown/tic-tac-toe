import { Container } from "react-bootstrap";
import Gameboard from "./components/Gameboard";
import { useState } from "react"


function App() {
  const [gameboard, setGameBoard] = useState([[null, null, null], [null, null, null], [null, null, null]])
  const [turn, setTurn] = useState("x");
  const [gameOver, setGameOver] = useState(false)

  function handleClick(positionArray) {

    const [row, column] = positionArray


    if (gameboard[row][column] ===  null) {
      const newGameboard = [...gameboard];
      newGameboard[row][column] = turn
      setGameBoard(newGameboard)
      turn === "x" ? setTurn("o") : setTurn("x");
      setGameOver(checkVictory())

    }

  }
  // gameboard[][]
  function checkVictory() {
    const [a, b, c, d, e, f, g, h, i] = gameboard.flat();
    return (
      compareSquares(a, b, c) ||
    compareSquares(d, e, f) ||
    compareSquares(g, h, i) ||
    compareSquares(a, d, g) ||
    compareSquares(b, e, h) ||
    compareSquares(c, f, i) ||
    compareSquares(a, e, i) ||
    compareSquares(c, e, g)
    )

  }

  function compareSquares(a, b, c) {

    return a!== null && a === b && a === c

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
