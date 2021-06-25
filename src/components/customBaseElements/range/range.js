import './range.css'


export function Range(props) {
    const handleChangeRange = e => {
        let newValue = props.boardSize
        newValue[props.parameter.name] = e.target.value
        props.setBoardSize(newValue);
    };
    return (
        <div className={props.className}>
            <label htmlFor={props.parameter.name}> {props.parameter.label} </label>
            <input
                id={props.parameter.name}
                max={props.parameter.maxValue}
                min={props.parameter.minValue}
                type="range"
                defaultValue={props.boardSize[props.parameter.name]}
                onChange={event => handleChangeRange(event)}
            />
        </div>
    );
}
