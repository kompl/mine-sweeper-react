import "./App.css";
import React, {useState} from "react";


import {SettingsPanel} from "../settingsPanel/settingsPanel.js";
import {GameMenu} from "../gameMenu/gameMenu";


function App() {
    const [boardSize, setBoardSize] = useState({boardHeight: 7, boardWidth: 7});
    const [difficultyLevel, setDifficultyLevel] = useState("easy");
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
                {board}
            </div>);
}

export default App;
