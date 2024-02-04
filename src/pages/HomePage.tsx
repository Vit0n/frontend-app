import { CounterButton } from '../components/CounterButton.tsx';
import { Layout } from '../components/Layout.tsx';

export const HomePage = () => {
    return (
        <Layout>
            <CounterButton />
            <CounterButton />
        </Layout>
    )
};
