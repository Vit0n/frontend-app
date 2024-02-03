import { Navigation } from './Navigation.tsx';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Navigation />

            <h1>Viton Space</h1>

            {children}
        </div>
    )
};
