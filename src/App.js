import "./App.css";
import React, {useState, useMemo} from "react";


import {SettingsPanel} from "./components/mineSweeper/settingsPanel/settingsPanel.js";
import {GameMenu} from "./components/mineSweeper/gameMenu/gameMenu";
import {generateId} from "./utils/idGenerator";


function App() {
    const [boardSize, setBoardSize] = useState({boardHeight: 7, boardWidth: 7});
    const [difficultyLevel, setDifficultyLevel] = useState("easy");
    const boardId = useMemo(() => generateId(), [])
    const [board, buildBoard] = useState(false);
    return (
            <div className="app">
                <SettingsPanel
                    boardSize={boardSize}
                    setBoardSize={setBoardSize}
                    difficultyLevel={difficultyLevel}
                    setDifficultyLevel={setDifficultyLevel}/>
                <GameMenu
                    label="retry"
                    buildBoard={buildBoard}
                    boardSize={boardSize}
                    difficultyLevel={difficultyLevel}
                />
                <div id={boardId}>
                    {board}
                </div>
            </div>);
}

export default App;
