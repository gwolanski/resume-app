/* eslint-disable react/prop-types */
import Icon from '@mui/material/Icon';

export default function AddButton({ onClick }) {
    return (
        <Icon className="addButton" color="primary" onClick={onClick}>add_circle</Icon>
    )
}