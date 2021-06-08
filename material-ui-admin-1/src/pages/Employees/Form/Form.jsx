import './Form.scss';

const Form = (props) => {

    return (
        <form className="employee-form">
            {props.children}
        </form>
    );
};

export default Form;