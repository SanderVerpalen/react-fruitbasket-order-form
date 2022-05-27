import React from "react";
import './FuitCounter.css'

function FruitCounter({
                          className,
                          buttonClassName,
                          buttonType,
                          clickHandlerFunctionMinus,
                          clickHandlerFunctionPlus,
                          counter
                      }) {
    return (
        <div
            className={className}
        >
            <button
                className={buttonClassName}
                type={buttonType}
                onClick={clickHandlerFunctionMinus}
            >-</button>
            {counter}
            <button
                className={buttonClassName}
                type={buttonType}
                onClick={clickHandlerFunctionPlus}
            >+</button>
        </div>
    )
}

export default FruitCounter;