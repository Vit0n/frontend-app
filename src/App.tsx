import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import './styles.css';

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App;
