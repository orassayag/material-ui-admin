import { Grid } from '@material-ui/core';
import useForm from '../../../hooks/useForm';
import Form from '../Form/Form';
import Input from '../../../components/Input/Input';
import RadioGroup from '../../../components/RadioGroup/RadioGroup';
import Select from '../../../components/Select/Select';
import * as employeeService from '../../../services/employee.service';
import './EmployeeForm.scss';

const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' }
];

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
                    <RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={inputChangeHandler}
                        items={genderItems}
                    />
                    <Select
                    name="department"
                    label="Department"
                    value={values.departmentId}
                    onChange={inputChangeHandler}
                    options={employeeService.getDepartments()}
                    />
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeeForm;