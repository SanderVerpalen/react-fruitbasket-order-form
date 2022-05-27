import React from 'react';
import './button.css'

function Button({
                    children,
                    className,
                    type,
                    clickHandlerFunction,
}) {
    return (
        <button
            onClick={clickHandlerFunction}
            type={type}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button;