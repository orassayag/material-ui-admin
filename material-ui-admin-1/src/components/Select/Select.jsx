import { FormControl, InputLabel, Select as MuiSelect, MenuItem } from '@material-ui/core';

const Select = ({ name, label, value, onChange, options }) => {

    return (
        <FormControl
            variant="outlined"
        >
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem
                    value="">
                    None
                </MenuItem>
                {options.map(o => (
                    <MenuItem key={o.id}
                        value={o.id}
                    >
                        {o.title}
                    </MenuItem>))
                }
            </MuiSelect>
        </FormControl>
    );
};

export default Select;