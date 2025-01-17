import { Alert, Modal, View } from 'react-native';
import { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

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
import Logo from '../../components/Logo';
import ProfileModal from './components/ProfileModal';

export default function Settings() {
	const { signedUser, changeUserName, signOut } = useAuthContext();

	const [modalOpen, setModalOpen] = useState(false);

	function changeUserPhoto() {
		Alert.alert('Usuário', 'Mudando foto do perfil');
	}

	async function changeName(newName: string) {
		// mudar nome do usuário
		await changeUserName(newName);

		// mudar nome do usuário nos posts
		const postDocs = await firestore()
			.collection('posts')
			.where('userId', '==', signedUser.uid)
			.get();

		postDocs.forEach(async doc => {
			await firestore()
				.collection('posts')
				.doc(doc.id)
				.update({ author: newName });
		});

		setModalOpen(false);
	}

	function closeModal() {
		setModalOpen(false);
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
					<Button
						text='Atualizar perfil'
						onPress={() => setModalOpen(true)}
					/>

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
					saveName={changeName}
				/>
			</Modal>
		</Container>
	);
}
