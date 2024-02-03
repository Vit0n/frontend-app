import { Navigation } from './Navigation.tsx';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navigation />

            {children}
        </div>
    )
};
