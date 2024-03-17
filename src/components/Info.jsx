export default function InfoInput({ inputLabel, name, value, onChange }) {
    return (
        <div>
            <label className="inputLabel">
                {inputLabel}
                <input className="inputBox"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}
