import { useEffect, useState } from 'react';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	ButtonContainer,
	Container,
	Content,
	UploadBtn,
	UploadBtnIcon,
	User,
	UserEmail,
	UserName,
} from './styles';
import { useAuthContext } from '../../contexts/authContext';
import Button from '../../components/Button';
import UserPhoto from '../../components/UserPhoto';
import { Alert, Image, Modal, View } from 'react-native';
import Logo from '../../components/Logo';
import ProfileModal from './components/ProfileModal';

export default function Settings() {
	const { signedUser, signOut } = useAuthContext();

	const [modalOpen, setModalOpen] = useState(false);

	function changeUserPhoto() {
		Alert.alert('Usuário', 'Mudando foto do perfil');
	}

	async function changeUserName(newName: string) {

	}

	function closeModal() {
		setModalOpen(false)
	}

	return (
		<Container>
			<Logo size={32} style={{ marginTop: 12 }} />

			<Content>
				<UploadBtn onPressOut={changeUserPhoto}>
					<UserPhoto photo={signedUser.photoUrl} size={165} />
					<UploadBtnIcon name='plus-circle' size={36} />
				</UploadBtn>

				<User>
					<UserName>{signedUser.name}</UserName>
					<UserEmail>{signedUser.email}</UserEmail>
				</User>

				<ButtonContainer>
					<Button text='Atualizar perfil' onPress={() => setModalOpen(true)} />

					<Button text='Sair' variant='secondary' onPress={signOut} />
				</ButtonContainer>
			</Content>

			<View />

			<Modal
				visible={modalOpen}
				animationType='slide'
				transparent
			>
				<ProfileModal
					close={closeModal}
					userName={signedUser.name}
				/>
			</Modal>
		</Container>
	);
}
<p></p>;
