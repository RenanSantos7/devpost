import { NavigationProp, useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather'

import { Container } from './styles';
import { HomeStackParams } from '../../routes/home.routes';

interface FloatingBtnProps {
    
};

export default function FloatingBtn(props: FloatingBtnProps) {
    const navigation = useNavigation<NavigationProp<HomeStackParams>>()

    return (
        <Container
            onPress={() => {
                navigation.navigate('Post')
            }}
            activeOpacity={0.8}
        >
            <FeatherIcon
                name='edit-2'
                size={24}
                color='#ffffff'
            />
        </Container>
    );
};