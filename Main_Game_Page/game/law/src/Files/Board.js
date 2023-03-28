import './Board.css';
import Files from './Index';

function Board({ board, onClick }) {

    if (!Array.isArray(board)) {
        return <p>Invalid board data.</p>;
    }

    return (
        <div className="board">
            {board.map((value, id) => {
                return <Files value={value} onClick={() => value === null && onClick(id)} />;
            })}
        </div>
    );
}



export default Board;