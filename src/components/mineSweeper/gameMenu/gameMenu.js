import "./gameMenu.css";
import {Board} from "../board/board";
import {generateId} from "../../../utils/idGenerator";


export function GameMenu(props) {
    const rebuildGame = () => {
        props.buildBoard(
            <div key={generateId()} >
                <Board
                    boardSize={props.boardSize}
                    difficultyLevel={props.difficultyLevel}
                />
            </div>
        )
    }
    return (
        <div className="gameMenu">
            <span onClick={() => rebuildGame()}>{props.label}</span>
        </div>
    );
}
