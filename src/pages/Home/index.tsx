import { Text, View } from 'react-native';
import { Page } from '../../components/layout';
import { useAuthContext } from '../../contexts/authContext';

export default function Home() {
    const { user } = useAuthContext();

    return (
        <Page>
            <Text>{user.name}</Text>
        </Page>
    );
};