import { useState } from "react";
import Board from "./Board";
export default function Game() {
     
    const [history,setHistory] = useState([Array(0).fill(null)])
    const [currentMove,setCurrentMove] = useState(0); 
    const xIsNext = currentMove % 2 === 0;  
    const currentSquares = history[currentMove];
    const [toggle,setToggle] = useState(false);
    function handleClick(i){
        if (calculateWinner(currentSquares) || currentSquares[i]){
          return;
        }
        const newSquares = currentSquares.slice();
        xIsNext === true ? newSquares[i] = "X" : newSquares[i] = "O";
        
        const nextHistory = [...history.slice(0, currentMove + 1), newSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }
    
      function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }
    
      const moves = history.map((squares, move) => {
       
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
           {move === currentMove ? <span>You are at move #{move}</span>: <button onClick={() => jumpTo(move)}>{description}</button>}
          </li>
        );
      });
    return (
      <div className="game">
        <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handleClick} />
        </div>
        <div className="game-info">
          <ol>{toggle === true ? moves.reverse() : moves}</ol>
          <button onClick={() => {setToggle(!toggle)}}>Toggle</button>
        </div>
      </div>
    );
  }
  let winningSquares = [];
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winningSquares.push(a,b,c);
        return squares[a];
      }
    }
    return null;
  }