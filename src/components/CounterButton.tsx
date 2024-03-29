import { useState } from 'react';

export const CounterButton = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
    )
};
