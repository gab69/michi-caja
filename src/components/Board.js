"use client";

import { useState, useEffect } from "react";

export default function Board({ player1, player2, onBackToMenu }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winnerLine, setWinnerLine] = useState([]);
  const winner = calculateWinner(board);

  useEffect(() => {
    if (winner) {
      setWinnerLine(getWinningLine(board));
    }
  }, [winner]);

  const handleClick = (index) => {
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinnerLine([]);
  };

  return (
    <div className="game">
      <h2>
        {winner
          ? `🎉 Ganador: ${winner === "X" ? player1 : player2}`
          : `Turno: ${isXNext ? player1 : player2} (${isXNext ? "X" : "O"})`}
      </h2>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`cell ${winnerLine.includes(index) ? "winning-cell" : ""}`}
            disabled={winner || cell}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="controls">
        <button onClick={resetGame} className="reset-button">
          Reiniciar
        </button>
        <button onClick={onBackToMenu} className="menu-button">
          Menú Principal
        </button>
      </div>

      <h1 className="mb-4">
  <img
    src="logo-caja.webp"
    alt="Logo Caja Huancayo"
    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto h-auto"
  />
</h1>


    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
    [0, 4, 8], [2, 4, 6], // Diagonales
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

function getWinningLine(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return line;
    }
  }
  return [];
}