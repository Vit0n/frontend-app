import { NavLink } from 'react-router-dom';

const MyNavLink = (props: { to: string, children: React.ReactNode }) => {
    return (
        <NavLink to={props.to} className={
            ({ isActive, isPending }) => {
            if (isActive) {
                return 'nav-link nav-link-active';
            }
            if (isPending) {
                return 'nav-link nav-link-pending';
            }

            return 'nav-link';
        }}>{props.children}</NavLink>
    )
};

const pages = [
    { path: '/', name: 'Home' },
    { path: '/contacts', name: 'Contacts' },
    // { path: '/about', name: 'About' }
];

export const Navigation = () => {
    return (
        <ul className="nav-list">
            {pages.map((page, index) => (
                <li key={index}>
                    <MyNavLink to={page.path}>{page.name}</MyNavLink>
                </li>
            ))}
        </ul>
    )
};
