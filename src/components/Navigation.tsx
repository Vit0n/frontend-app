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

export const Navigation = () => {
    return (
        <ul className="nav-list">
            <li className="nav-link-item">
                <MyNavLink to="/">Home</MyNavLink>
            </li>
            <li className="nav-link-item">
                <MyNavLink to="/contacts">Contacts</MyNavLink>
            </li>
        </ul>
    )
};
