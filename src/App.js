import "./App.css";
import React, {useState} from "react";


import {SettingsPanel} from "./components/mine_sweeper/settings_panel/settings_panel.js";
import {GameMenu} from "./components/mine_sweeper/game_menu/game_menu";


export const Settings = React.createContext();


function App() {
    const [context, setContext] = useState({boardHeight: 7, difficultyLevel: "easy", boardWidth: 7});
    return (
        <Settings.Provider value={[context, setContext]}>
            <div id="app">
                <SettingsPanel /> <GameMenu label="retry" />
                <div id="board"></div>
            </div>
        </Settings.Provider>);
}

export default App;
