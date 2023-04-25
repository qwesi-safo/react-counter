import React, { useState } from 'react';

const FunctionState = () => {
    const [count, handleUpdate,] = useState(0);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <hr />
            <button onClick={() => handleUpdate(count + 1)}>Increase count</button>
            <button onClick={() => handleUpdate(count - 1)}>Decrease count</button>
        </div>
    );
}

export default FunctionState;
