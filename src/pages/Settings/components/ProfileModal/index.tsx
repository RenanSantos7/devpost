import { Platform, Text, View } from 'react-native';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { BackButton, BackButtonTxt, Container, Content } from './styles';
import { useThemeContext } from '../../../../contexts/themeContext';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { useState } from 'react';

interface ProfileModalProps {
    close: () => void;
    userName: string;
};

export default function ProfileModal(props: ProfileModalProps) {
    const { theme } = useThemeContext();

    const [name, setName] = useState(props.userName);

    return (
        <Container behavior={Platform.OS === 'android' ? undefined : 'padding'}>
            <BackButton onPress={() => props.close()}>
                <MaterialComIcons
                    name='arrow-left'
                    size={theme.size.text.main}
                />
                <BackButtonTxt>Voltar</BackButtonTxt>
            </BackButton>
            
            <Content>
                <Input
                    value={name}
                    onChangeText={text => setName(text)}
                    autoFocus
                />
                <Button text='Salvar' />
            </Content>
        </Container>
    );
};