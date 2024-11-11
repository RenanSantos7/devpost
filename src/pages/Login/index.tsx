import { Text, View } from 'react-native';
import { Container, Title, TitleRed } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Login() {
	return (
		<Container>
			<Title>
				Dev<TitleRed>Post</TitleRed>
			</Title>

			<Input placeholder='email@email.com' />

            <Input placeholder='*********' password />
            
            <Button text='Acessar' />
            
            <Button text='Criar uma conta' variant='only-text' />
		</Container>
	);
}
