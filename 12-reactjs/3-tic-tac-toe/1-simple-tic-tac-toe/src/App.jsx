import { useState } from "react"

// eslint-disable-next-line react/prop-types
function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  )
}

function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);



  function handleClick(i) {
    // apabila kotaknya sudah ada isinya maka code selanjutnya tidak dijalankan
    if(squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    console.log(nextSquares);
    if(xIsNext == true) { 
      nextSquares[i] = 'X'; // ['X', null, null, null, null, null, null, null, null, null]
    } else {
      nextSquares[i] = 'O';
    }

    // nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status = '';
  if(winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  console.log(winner);

  return (
    <>
      <div className="status">{status}</div>  
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  )
}

export default function Game() {
  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    </>    
  );
}

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

  for(let i = 0; i < lines.length; i++) {

    const a = lines[i][0]; // 0
    const b = lines[i][1]; // 1
    const c = lines[i][2]; // 2

    // const [a, b, c] = lines[i] // sama aja kyak diatas tapi lebih ringkas


   // ['O', null, 'X', null, null, 'X', null, null, 'X']
   // [ 0 ,  1  ,  2 ,  3 ,   4  ,  5 ,  6  ,  7  ,  8 ]


    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}

