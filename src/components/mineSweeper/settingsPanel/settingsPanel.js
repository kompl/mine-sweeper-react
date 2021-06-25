import "./settingsPanel.css";

import {RadioSet} from "../../customBaseElements/radioSet/radioSet";
import {Range} from "../../customBaseElements/range/range";


export function SettingsPanel(props) {
    const difficultyLevelChoices = ["easy", "normal", "hard"];
    const boardHeight = {"name": "boardHeight", "label": "height", "maxValue": "10", "minValue": "4"};
    const boardWidth = {"name": "boardWidth", "label": "width", "maxValue": "10", "minValue": "4"};
    return (
        <div className="board-settings">
            <Range
                className="board-settings-part"
                parameter={boardHeight}
                boardSize={props.boardSize}
                setBoardSize={props.setBoardSize}
            />
            <Range
                className="board-settings-part"
                parameter={boardWidth}
                boardSize={props.boardSize}
                setBoardSize={props.setBoardSize}
            />
            <RadioSet
                className="board-settings-part"
                choices={difficultyLevelChoices}
                state={props.difficultyLevel}
                setState={props.setDifficultyLevel}
            />
        </div>
    );
}
