import { Avatar, User, UserEmail, UserName } from './styles';
import { Page } from '../../components/layout';
import { useAuthContext } from '../../contexts/authContext';
import Button from '../../components/Button';

export default function Profile() {
    const { user, signOut } = useAuthContext();

	return (
		<Page
			style={{
				backgroundColor: '#303030',
				justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                gap: 24,
			}}
		>
            <Avatar
                source={require('../../assets/avatar.png')}
                resizeMethod='scale'
            />
            <User>
                <UserName>{user.name}</UserName>
                <UserEmail>{user.email}</UserEmail>
            </User>

            <Button
                text='Atualizar perfil'
            />

            <Button
                text='Sair'
                variant='secondary'
                onPress={signOut}
            />
		</Page>
	);
}
