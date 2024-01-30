import { useState } from 'react'

function App() {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <h1>Viton Space</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App;
