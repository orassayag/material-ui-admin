import { FormControl, RadioGroup as MuiRadioGroup, FormControlLabel, FormLabel, Radio } from '@material-ui/core';

const RadioGroup = ({ name, label, value, onChange, items }) => {

    return (
        <FormControl>
            <FormLabel>
                {label}
            </FormLabel>
            <MuiRadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
                {items.map(g => (
                    <FormControlLabel
                        key={g.id}
                        value={g.id}
                        control={<Radio />}
                        label={g.title}
                    />
                ))}
            </MuiRadioGroup>
        </FormControl>
    );
};

export default RadioGroup;