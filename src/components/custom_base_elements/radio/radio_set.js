import './radio_set.css'
import {useContext} from "react";
import {Settings} from "../../../App";

export function RadioSet(props) {
    const body = props.choices.map((choice) => <Radio value={choice} key={choice.toString()} context={props.context}/>)
    return (
        <div className={props.className}>
            {body}
        </div>
    )
}


function Radio(props) {
    const [context, setContext] = useContext(Settings);
    const handleChangeRadio = e => {
        let newValue = context
        newValue["difficultyLevel"] = e.target.value
        setContext(newValue);
    };
    return (
        <label className="difficultyLevel">{props.value}
            <input name="difficultyLevelChoice"
                type="radio"
                value={props.value}
                checked={context["difficultyLevel"] === props.value.toString()}
                onClick={event => handleChangeRadio(event)}
            />
            <span className="checkmark"></span>
        </label>
    );
}
