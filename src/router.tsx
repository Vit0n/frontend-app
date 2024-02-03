import { createBrowserRouter } from 'react-router-dom';
import { ContactsPage } from './pages/ContactsPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

export const router = createBrowserRouter([
    { path: '/', element: <HomePage/> },
    { path: '/contacts', element: <ContactsPage/> }
]);
