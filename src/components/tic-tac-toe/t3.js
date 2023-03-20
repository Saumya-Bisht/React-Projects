import { useState } from 'react';
function Square({value,onSquareClick}) {
    // const [value, setValue] = useState();
    // function handleClick() {
    //     setValue('X');
    //   }
    return <button className="square" onClick={onSquareClick}>
    {value}
  </button>
  }

function Board() {
    const [xTurn, setxTurn] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        // const nextSquares = squares.slice();
        // nextSquares[i] = 'X';
        // setSquares(nextSquares);
        if (squares[i] || calculateWinner(squares)) {
            return;
          }
          const nextSquares = squares.slice();
          if (xTurn) {
            nextSquares[i] = 'X';
          } else {
            nextSquares[i] = 'O';
          }
          setSquares(nextSquares);
          setxTurn(!xTurn);
      }
      


      function calculateWinner(squares) {
        const winPattern = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < winPattern.length; i++) {
          const [a, b, c] = winPattern[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xTurn ? "X" : "O");
  }

    return (<div className='container'>
        <div className="status">{status}</div>
        <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>
    <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
    <div><button id='button' onClick={Reset}>RESET</button></div>
    </div>)
  }

  function Reset(){
    window.location.reload(false);

  }

export default Board