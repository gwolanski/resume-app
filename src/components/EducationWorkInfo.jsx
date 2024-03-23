/* eslint-disable react/prop-types */
import TextField from '@mui/material/TextField';

export default function EducationWorkInfoInput({ inputLabel, id, name, value, onChange }) {
    const standardTextField = () => {
        return (
            <TextField
                id="standard-basic"
                label={inputLabel}
                variant="outlined"
                className="inputBox"
                identifier={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        )
    }

    const multilineTextField = () => {
        return (
            <TextField
                id="outlined-multiline-static"
                label={inputLabel}
                multiline
                rows={5}
                className="inputBox"
                identifier={id}
                name={name}
                value={value}
                onChange={onChange}
            />
        )
    }

    const renderTextField = () => {
        if (name === "responsibilities") {
            return multilineTextField();
        } else {
            return standardTextField();
        }
    }

    return (
        <div className="inputContainer">
            {renderTextField()}
        </div>
    )
}