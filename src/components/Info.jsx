import TextField from '@mui/material/TextField';

export default function InfoInput({ inputLabel, name, value, onChange }) {
    return (
        <div className="inputContainer">
            <TextField id="standard-basic" label={inputLabel} variant="outlined"
                className="inputBox"
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
