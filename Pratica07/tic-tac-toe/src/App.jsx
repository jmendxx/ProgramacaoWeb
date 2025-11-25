import { useState } from 'react';
import Board from './components/board.jsx';

export default function App() {
  const [ history, setHistory ] = useState([Array(9).fill(null)]);
  const [ step, setStep ] = useState(0);
  const [ xIsNext, setXIsNext ] = useState(true);
  const [score, setScore ] = useState({ X: 0, O: 0, Draws: 0});

  const current = history[step];

  function handlePlay(nextSquares) {
    const nextHistory = history.slice(0, step + 1).concat([nextSquares]);
    setHistory (nextHistory);
    setStep (nextHistory.length - 1);
    const winner = calculateWinner (nextSquares);
    if (winner) {
      setScore ((s) => ({...s, [winner]: s[winner] + 1}));
    } else if (!nextSquares.includes (null)) {
      setScore ((s) => ({...s, Draws: s.Draws + 1}));
    }
    setXIsNext (!xIsNext);
  }

  function handleResetBoard() {
    setHistory([Array(9).fill(null)]);
    setStep(0);
    setXIsNext(true);
  }

  function handleResetAll() {
    handleResetBoard();
    setScore({ X: 0, O: 0, Draws: 0 });
  }

  function jumpTo(move) {
    setStep(move);
    setXIsNext(move % 2 === 0);
  }

  const winner = calculateWinner(current);
  const status = winner
    ? `Vencedor: ${winner}`
    : current.includes(null)
    ? `Próximo: ${xIsNext ? "X" : "O"}`
    : "Empate";

  return (
    <div className="app">
      <h1>Jogo da Velha</h1>
      <div className="game">
        <Board squares={current} onPlay={handlePlay} xIsNext={xIsNext} />
        <div className="info">
          <div className="status">{status}</div>

          <div className="controls">
            <button onClick={handleResetBoard}>Reiniciar Tabuleiro</button>
            <button onClick={handleResetAll}>Reiniciar Tudo</button>
          </div>

          <div className="scoreboard">
            <h3>Placar</h3>
            <p>X: {score.X}</p>
            <p>O: {score.O}</p>
            <p>Empates: {score.Draws}</p>
          </div>

          <div className="history">
            <h3>Histórico de jogadas</h3>
            <ol>
              {history.map((_, move) => (
                <li key={move}>
                  <button
                    className={move === step ? "active" : ""}
                    onClick={() => jumpTo(move)}
                  >
                    {move === 0 ? "Início" : `Mover #${move}`}
                  </button>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <footer style={{ marginTop: 20 }}>
        <small>Feito com React + Vite — Programação Web – Newton Paiva.</small>
      </footer>
    </div>
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
    [2, 4, 6],
  ];
for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

