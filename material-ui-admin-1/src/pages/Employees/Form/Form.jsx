import './Form.scss';

const Form = ({ children }) => {

    return (
        <form className="employee-form" autoComplete="off">
            {children}
        </form>
    );
};

export default Form;