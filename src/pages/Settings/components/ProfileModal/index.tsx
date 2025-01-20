import { Platform } from 'react-native';
import { useState } from 'react';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { BackButton, BackButtonTxt, Container, Content } from './styles';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

interface ProfileModalProps {
	close: () => void;
	userName: string;
	saveName: (newName: string) => Promise<void>
}

export default function ProfileModal(props: ProfileModalProps) {
	const [name, setName] = useState(props.userName);
	
	return (
		<Container behavior={Platform.OS === 'android' ? undefined : 'padding'}>
			<BackButton onPress={() => props.close()}>
				<MaterialComIcons
					name='arrow-left'
					size={16}
				/>
				<BackButtonTxt>Voltar</BackButtonTxt>
			</BackButton>

			<Content>
				<Input
					value={name}
					onChangeText={text => setName(text)}
					autoFocus
				/>
				<Button
					text='Salvar'
					onPress={() => props.saveName(name)}
					disabled={name.trim() === props.userName || name === ''}
				/>
			</Content>
		</Container>
	);
}
