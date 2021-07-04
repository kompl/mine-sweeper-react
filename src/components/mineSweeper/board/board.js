import React, {useMemo, useState} from "react";
import "./board.css";


const dangerAreaProportionChoices = {
    easy: 15,
    normal: 40,
    hard: 60
};

export function Board(props) {
    const tilesCount = props.boardSize["boardHeight"] * props.boardSize["boardWidth"];
    const minesCount = tilesCount / 100 * dangerAreaProportionChoices[props.difficultyLevel];
    const tiles = generateTilesArray(tilesCount, minesCount);
    const schema = generateSchema(tiles, props.boardSize["boardHeight"], props.boardSize["boardWidth"]);
    return <table>
        <tbody>
            {schema.map(
                (tilesArray, index,schema) =>
                    <TilesRow
                        schema={schema}
                        tilesArray={tilesArray}
                        rowNum={index}
                        key={index.toString()}
                    />)}
        </tbody>
    </table>
}

function TilesRow(props) {
    return <tr>
        {props.tilesArray.map(
            (tile, index) =>
                <Tile
                    schema={props.schema}
                    key={index.toString()}
                    rowNum={props.rowNum}
                    cellNum={index}
                />)}
    </tr>;
}

function Tile(props) {
    const danger = useMemo(() => calculateDanger(props.schema, props.rowNum, props.cellNum), [props.schema, props.rowNum, props.cellNum])
    const [isTurned, setTurned] = useState(false);
    return (
        <td
            className={isTurned ? "tile turned" : "tile unturned"}
            data-danger={isTurned ? danger : ""}
            onClick={() => setTurned(true)}
        >
            {isTurned && danger !== '100' ? danger : ""}
        </td>
    );
}

function generateTilesArray(tilesCount, minesCount) {
    const tilesArray = new Array(tilesCount).fill(0);
    while (minesCount > 0) {
        const targetCell = getRandomIndex(tilesCount);
        if (!tilesArray[targetCell]) {
            tilesArray[targetCell] = 100;
            minesCount--;
        }
    }
    return tilesArray;
}

function generateSchema(tiles, boardHeight, boardLength) {
    return Array.from(Array(parseInt(boardHeight)), () => tiles.splice(0, boardLength));
}

function getRandomIndex(max) {
    return Math.ceil(Math.random() * max) - 1;
}

function calculateDanger(schema, rowNum, cellNum) {
    if (schema[rowNum][cellNum] !== 100) {
        return [
            (cellNum > 0 && schema[rowNum][cellNum - 1] === 100),
            (cellNum > 0 && rowNum > 0 && schema[rowNum - 1][cellNum - 1] === 100),
            (rowNum > 0 && schema[rowNum - 1][cellNum] === 100),
            (rowNum > 0 && schema[rowNum].length - 1 > cellNum && schema[rowNum - 1][cellNum + 1] === 100),
            (schema[rowNum].length - 1 > cellNum && schema[rowNum][cellNum + 1] === 100),
            (cellNum && schema.length - 1 > rowNum && schema[rowNum + 1][cellNum - 1] === 100),
            (schema.length - 1 > rowNum && schema[rowNum + 1][cellNum] === 100),
            (schema[rowNum].length - 1 > cellNum && schema.length - 1 > rowNum && schema[rowNum + 1][cellNum + 1] === 100)
        ].filter(Boolean).length
    } else {
        return '100';
    }
}
