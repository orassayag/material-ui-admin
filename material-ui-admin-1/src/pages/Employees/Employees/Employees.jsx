import { Paper } from '@material-ui/core';
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import PageHeader from '../../../components/PageHeader/PageHeader';
import './Employees.scss';

const Employees = () => {

    return (
        <>
            <PageHeader
                title="New Employee"
                subtitle="Form design with validation"
                icon={
                    <PeopleOutlineTwoToneIcon
                        fontSize="large"
                    />
                }
            />
            <Paper
                className="employees-container"
            >
                <EmployeeForm />
            </Paper>
        </>
    );
};

export default Employees;