import TextField from '@mui/material/TextField';

export default function EducationWorkInfoInput({ inputLabel, id, name, value, onChange }) {
    return (
        <div className="inputContainer">

            {/* !!!create a conditional that renders multiline text field if name is 'description' */}

            <TextField id="standard-basic" label={inputLabel} variant="outlined"
                className="inputBox"
                identifier={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}