import "./gameMenu.css";
import {Board} from "../board/board";


export function GameMenu(props) {
    const rebuildGame = () => {
        props.buildBoard(
            <Board
                boardSize={props.boardSize}
                difficultyLevel={props.difficultyLevel}
            />)
    }
    return (
        <div className="gameMenu">
            <span onClick={() => rebuildGame()}>{props.label}</span>
        </div>
    );
}
