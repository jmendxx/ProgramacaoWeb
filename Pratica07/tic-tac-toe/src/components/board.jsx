import React from "react";
import Square from "./square";

export default function Board({ squares, onPlay, xIsNext }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const next = squares.slice();
    next[i] = xIsNext ? "X" : "O";
    onPlay(next);
  }

  return (
    <div className="board">
      {Array.from({ length: 9 }).map((_, i) => (
        <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
      ))}
    </div>
  );
}

function calculateWinner(s) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (s[a] && s[a] === s[b] && s[a] === s[c]) {
      return s[a];
    }
  }
  return null;
}
