import './radioSet.css'


export function RadioSet(props) {
    const body = props.choices.map((choice) => <Radio
        value={choice}
        key={choice.toString()}
        setState={props.setState}
        state={props.state}
    />)
    return (
        <div className={props.className}>
            {body}
        </div>
    )
}


function Radio(props) {
    return (
        <label className="difficultyLevel">{props.value}
            <input name="difficultyLevelChoice"
                type="radio"
                value={props.value}
                checked={props.state === props.value}
                onChange={event => props.setState(event.target.value)}
            />
            <span className="checkmark"></span>
        </label>
    );
}
