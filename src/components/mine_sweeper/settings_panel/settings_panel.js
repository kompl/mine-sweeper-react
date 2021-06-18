import "./settings_panel.css";

import {RadioSet} from "../../custom_base_elements/radio/radio_set";
import {Range} from "../../custom_base_elements/range/range";


export function SettingsPanel(props) {
    const difficultyLevelChoices = ["easy", "normal", "hard"];
    const defaultDifficultyLevel = "easy";
    const boardHeight = {"name": "boardHeight", "label": "height", "maxValue": "10", "minValue": "4"};
    const boardWidth = {"name": "boardWidth", "label": "width", "maxValue": "10", "minValue": "4"};
    return (
        <div className="board-settings">
            <Range className="board-settings-part" parameter={boardHeight} />
            <Range className="board-settings-part" parameter={boardWidth} />
            <RadioSet className="board-settings-part" choices={difficultyLevelChoices} default={defaultDifficultyLevel} />
        </div>
    );
}
