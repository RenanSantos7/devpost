import {
    Avatar,
    Container,
    User,
    UserEmail,
    UserName
} from './styles';
import { useAuthContext } from '../../contexts/authContext';
import Button from '../../components/Button';

export default function Profile() {
	const { signedUser, signOut } = useAuthContext();

	return (
		<Container>
			<Avatar
				source={require('../../assets/avatar.png')}
				resizeMethod='scale'
			/>
			<User>
				<UserName>{signedUser.name}</UserName>
				<UserEmail>{signedUser.email}</UserEmail>
			</User>

			<Button text='Atualizar perfil' />

			<Button text='Sair' variant='secondary' onPress={signOut} />
		</Container>
	);
}
