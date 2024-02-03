import { createBrowserRouter } from 'react-router-dom';
import { ContactsPage } from './pages/ContactsPage.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { HomePage } from './pages/HomePage.tsx';

export const router = createBrowserRouter([
    { path: '/', element: <HomePage/> },
    { path: '/contacts', element: <ContactsPage/> },
    { path: '/about', element: <AboutPage/> },
    { path: '*', element: <NotFoundPage/> }
]);
