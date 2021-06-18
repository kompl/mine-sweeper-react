import "./game_menu.css";
import {useCallback, useContext} from "react";
import {buildGame} from "../board/board";
import {Settings} from "../../../App";


export function GameMenu(props) {
    const [context, setContext] = useContext(Settings);
    const buildGameCallback = useCallback(() => {
            console.log(context)
            buildGame(context["boardHeight"], context["boardWidth"], context["difficultyLevel"]);
        },
        [])
    return (
        <div id="gameMenu">
            <span onClick={buildGameCallback}>{props.label}</span>
        </div>
    );
}
