export default function InfoInput({ inputLabel, name, value, onChange }) {
    return (
        <div className="inputContainer">
            <label className="inputLabel">
                {inputLabel}
            </label>
            <input className="inputBox"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
