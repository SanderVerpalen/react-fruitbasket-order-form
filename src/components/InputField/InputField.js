import React from "react";
import './inputField.css';

function InputField({label, type, value, name, id, placeHolder, changeHandlerFunction}) {

    return (
        <>
            <label>{label}</label>
            <input
                name={name}
                type={type}
                id={id}
                value={value}
                placeholder={placeHolder}
                onChange={changeHandlerFunction}
            />
        </>
    )
}

export default InputField;