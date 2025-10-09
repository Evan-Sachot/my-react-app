import React, { useState } from "react";

const Number = () => {
    const [num, setNum] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const handleClick = () => {
        setNum(randomNumberInRange(20, 90));
    };

    return (
        <div className="wrapper">
            <h2>Number is: {num}</h2>
            <button onClick={handleClick}>
                Click Me Generate
            </button>
        </div>
    );
};

export default Number;