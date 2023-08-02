import { useState } from 'react'
import './App.css'
import Square from './components/squares'
import ModalWinner from './components/modalWinner'

const TURNS = {
  X: '❌',
  O: '⭕️'
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [ winner, setWinner ] = useState(null)

  const checkWinner = ( boardToCheck ) => {
    for( const combo of WINNER_COMBOS){
      const [ a, b , c ] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
        ){
          return boardToCheck[a]
        }
    }

    return null
  }

  const checkEndGame = ( newBoard) => {
    return newBoard.every( s => s !== null )
  }

  const updateBoard = ( index ) => {

    if (board[index] !== null || winner ) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  const resetBoard = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  
  }

  


  return (
    <main>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetBoard} >Reset del juego</button>
      <div className="table">
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} turn={turn} updateBoard={updateBoard} >
                {board[index]}
              </Square>
            )
          }
          )
        }
      </div>

      <section className='turn-sec'>
        <Square>{turn === TURNS.X ? `Es el turno de ${turn}` : `Es el turno de ${turn}`}</Square>
      </section>

      { winner !== null && <ModalWinner winner={winner} resetBoard={resetBoard} />}
    </main>
  )
}

export default App
