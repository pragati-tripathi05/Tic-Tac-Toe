import React from "react";
import SquareComponent from "./SquareComponent";

const GridComponent = () => {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [isX, setIsX] = React.useState(true);

  const handleClick = (index) => {
    if (calculateWinner(squares) || squares[index]) return;
    squares[index] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) status = `Winner: ${winner}`;
  else status = `Next player: ${isX ? "X" : "O"}`;

  const handleRestart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  };

  function calculateWinner(squares) {
    const winnigPatterns = [
      [0, 1, 2], //Horizontal
      [3, 4, 5], //Horizontal
      [6, 7, 8], //Horizontal
      [0, 3, 6], //Vertical
      [1, 4, 7], //Vertical
      [2, 5, 8], //Vertical
      [0, 4, 8], //Diagonal
      [2, 4, 6], //Diagonal
    ];

    for (let i = 0; i < winnigPatterns.length; i++) {
      const [a, b, c] = winnigPatterns[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
        return squares[a];
    }
    return null;
  }

  return (
    <div className="board">
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          value={squares[0]}
          onClick={() => handleClick(0)}
        />
        <SquareComponent
          className="b-bottom-right"
          value={squares[1]}
          onClick={() => handleClick(1)}
        />
        <SquareComponent
          className="b-bottom"
          value={squares[2]}
          onClick={() => handleClick(2)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-bottom-right"
          value={squares[3]}
          onClick={() => handleClick(3)}
        />
        <SquareComponent
          className="b-bottom-right"
          value={squares[4]}
          onClick={() => handleClick(4)}
        />
        <SquareComponent
          className="b-bottom"
          value={squares[5]}
          onClick={() => handleClick(5)}
        />
      </div>
      <div className="row jc-center">
        <SquareComponent
          className="b-right"
          value={squares[6]}
          onClick={() => handleClick(6)}
        />
        <SquareComponent
          className="b-right"
          value={squares[7]}
          onClick={() => handleClick(7)}
        />
        <SquareComponent value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <div className="lastlines">
        <div className="status">
          <u> {status} </u>
        </div>
        <div>
          <button className="restart" onClick={handleRestart}>
            Restart Game!
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;

//  Board indices
//  0   1   2
//  3   4   5
//  6   7   8

// Horizontal Winning Pattern
// [0, 1, 2],  [3, 4, 5],  [6, 7, 8]

// Vertical Winning Pattern
// [0, 3, 6],  [1, 4, 7],  [2, 5, 8]

// Diagonal Winning Pattern
// [0, 4, 8],  [2, 4, 6]
