//Tahtayı ve oyun mantığını yönetir
import { useState } from 'react';
import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const winner = calculateWinner(squares);
    const isDraw = !winner && squares.every((square) => square !== null);

    function handleClick(index) {
        if (squares[index] || winner) {
            return;
        }

        const nextSquares = squares.slice();
        nextSquares[index] = xIsNext ? 'X' : 'O';

        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

    function resetGame() {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    }

    let status;

    if (winner) {
        status = `Kazanan: ${winner}`;
    } else if (isDraw) {
        status = 'Berabere!';
    } else {
        status = `Sıradaki oyuncu: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div className="game-card">
            <h1>XOX Oyunu</h1>

            <p className="status">{status}</p>

            <div className="board">
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>

                <div className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>

                <div className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>

            <button className="reset-button" onClick={resetGame}>
                Oyunu Sıfırla
            </button>
        </div>
    );
}

export default Board;