export default function EducationWorkInfoInput({ inputLabel, id, name, value, onChange }) {
    return (
        <div className="inputContainer">
            <label className="inputLabel">
                {inputLabel}
            </label>
            <input className="inputBox"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}