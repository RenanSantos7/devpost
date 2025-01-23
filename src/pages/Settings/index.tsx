import { Modal, View } from 'react-native';
import {
	ImageLibraryOptions,
	ImagePickerResponse,
	launchImageLibrary,
} from 'react-native-image-picker';
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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

	async function changePhoto() {
		const options: ImageLibraryOptions = {
			mediaType: 'photo',
			includeExtra: false,
			selectionLimit: 1,
		};

		launchImageLibrary(options, async response => {
			if (response.didCancel) {
				console.log(
					'Solicitação de acesso à biblioteca de imagens cancelada pelo usuário.'
				);
			} else if (response.errorMessage) {
				console.log(
					`Erro ao acessar biblioteca de imagens:\n[${response.errorCode}]: ${response.errorMessage}`
				);
			} else {
				await uploadFile(response);
			}
		});
	}

	async function uploadFile(response: ImagePickerResponse) {
		const fileSource = response.assets[0].uri;
		console.log('File source:', fileSource);
		
		const storageRef = storage().ref(`users/${signedUser.uid}/photo.jpg`);

		return await storageRef
			.putFile(fileSource)
			.then(() => {
				console.log('Arquivo enviado com sucesso!');
			})
			.catch(error => {
				console.error('Erro ao enviar arquivo:', error);
			});
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
			<UploadBtn onPressOut={changePhoto}>
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

			<View />

			<Modal visible={modalOpen} animationType='slide' transparent>
				<ProfileModal
					close={closeModal}
					userName={signedUser.name}
					saveName={changeName}
				/>
			</Modal>
		</Container>
	);
}
