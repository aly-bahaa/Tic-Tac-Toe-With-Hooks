import Square from "./Square"


export default function Board({ xIsNext,squares,onPlay }) {
  
  const winner = calculateWinner(squares);

  let status;
  if (winner){
    status = "Winner: " + winner 
  }else if (squares.length === 9 && !squares.includes(undefined)){
    status = "Draw";
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

    return <>
    <div className="status">{status}</div>
    <div></div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => onPlay(0)} winning = {true ? winningSquares.includes(0) && winner != null: false} />
      <Square value={squares[1]} onSquareClick={() => onPlay(1)} winning = {true ? winningSquares.includes(1) && winner != null: false}/>
      <Square value={squares[2]} onSquareClick={() => onPlay(2)} winning = {true ? winningSquares.includes(2) && winner != null: false}/>
    </div>
    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => onPlay(3)} winning = {true ? winningSquares.includes(3) && winner != null: false}/>
      <Square value={squares[4]} onSquareClick={() => onPlay(4)} winning = {true ? winningSquares.includes(4) && winner != null: false}/>
      <Square value={squares[5]} onSquareClick={() => onPlay(5)} winning = {true ? winningSquares.includes(5) && winner != null: false}/>
    </div>
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => onPlay(6)} winning = {true ? winningSquares.includes(6) && winner != null: false}/>
      <Square value={squares[7]} onSquareClick={() => onPlay(7)} winning = {true ? winningSquares.includes(7) && winner != null: false}/>
      <Square value={squares[8]} onSquareClick={() => onPlay(8)} winning = {true ? winningSquares.includes(8) && winner != null: false}/>
    </div>
  </>
    
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