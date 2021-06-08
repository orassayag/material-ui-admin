import { FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, Radio } from '@material-ui/core';
import useForm from '../../../hooks/useForm';
import Form from '../Form/Form';
import Input from '../../../components/Input/Input';
import './EmployeeForm.scss';

const initialFValues = {
    id: 0,
    fullName: '',
    emailAddress: '',
    mobilePhone: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false
};

const EmployeeForm = () => {

    const { values, inputChangeHandler } = useForm(initialFValues);

    return (
        <Form>
            <Grid
                container
            >
                <Grid
                    item
                    xs={6}
                >
                    <Input
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={inputChangeHandler}
                    />
                    <Input
                        label="Email Address"
                        name="emailAddress"
                        value={values.emailAddress}
                        onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid
                    item
                    xs={6}
                >
                    <FormControl>
                        <FormLabel>
                            Gender
                        </FormLabel>
                        <RadioGroup
                            row
                            name="gender"
                            value={values.gender}
                            onChange={inputChangeHandler}
                        >
                            <FormControlLabel
                                value="male"
                                control={<Radio />}
                                label="Male"
                            />
                            <FormControlLabel
                                value="female"
                                control={<Radio />}
                                label="Female"
                            />
                            <FormControlLabel
                                value="other"
                                control={<Radio />}
                                label="Other"
                            />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;