import { useState } from 'react';

const useForm = (initialFValues) => {

    const [values, setValues] = useState(initialFValues);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    return {
        values,
        setValues,
        inputChangeHandler
    };
};

export default useForm;