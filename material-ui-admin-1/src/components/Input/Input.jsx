import { TextField } from '@material-ui/core';

const Input = ({ label, name, value, onChange }) => {

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;