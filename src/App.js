import { Container } from "react-bootstrap";
import Gameboard from "./components/Gameboard";
import { useState } from "react"


function App() {
  const [gameboard, setGameBoard] = useState([[null, null, null], [null, null, null], [null, null, null]])
  return (
    <Container fluid>
      <h1>Tic Tac Toe Game</h1>
      <Container className="vh-100 vw-100">
        <Gameboard />
      </Container>

    </Container>
  );
}

export default App;
