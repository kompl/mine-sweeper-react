import './range.css'
import {useContext} from "react";
import {Settings} from "../../../App";

export function Range(props) {
    const [context, setContext] = useContext(Settings);
    const handleChangeRange = e => {
        let newValue = context
        newValue[props.parameter.name] = e.target.value
        setContext(newValue);
    };
    return (
        <div className={props.className}>
            <label htmlFor={props.parameter.name}> {props.parameter.label} </label>
            <input
                id={props.parameter.name}
                max={props.parameter.maxValue}
                min={props.parameter.minValue}
                type="range"
                defaultValue={context[props.parameter.name]}
                onChange={event => handleChangeRange(event)}
            />
        </div>
    );
}
