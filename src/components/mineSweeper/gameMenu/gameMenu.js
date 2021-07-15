import "./gameMenu.css";
import {Board} from "../board/board";
import {generateId} from "../../../utils/idGenerator";
import {EventBus} from "../../../utils/eventBus";


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
    EventBus.subscribe('needRebuildGame', (needRebuild) => {if (needRebuild) rebuildGame()})
    return (
        <div className="gameMenu">
            <span onClick={() => rebuildGame()}>{props.label}</span>
        </div>
    );
}
