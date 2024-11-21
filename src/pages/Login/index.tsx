import { Container, ErrorMsg, Logo, Wrapper } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuthContext } from '../../contexts/authContext';
import { useEffect, useState } from 'react';

export default function Login() {
	const [login, setLogin] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	
	const { error, signIn, signUp } = useAuthContext();

	function clear() {
		setName('');
		setEmail('');
		setPassword('');
	}

	useEffect(() => {
		if (!error) {
			setErrorMsg('');
		}

		if (error?.message.includes('auth/invalid-email')) {
			setErrorMsg(
				'Email inválido. Verifique se digitou ele corretamente'
			);
		}

		if (error?.message.includes('auth/invalid-credential')) {
			setErrorMsg(
				'Senha incorreta. Verifique se digitou ela corretamente'
			);
		}

		return () => {
			setErrorMsg('');
		};
	}, [error]);

	return (
		<Container>
			<Logo source={require('../../assets/devpost_logo.png')} />

			{login ? (
				<Wrapper>
					<Input
						placeholder='email@email.com'
						keyboardType='email-address'
						value={email}
						onChangeText={text => setEmail(text)}
					/>

					<Input
						placeholder='*********'
						value={password}
						onChangeText={text => setPassword(text)}
						secret
					/>

					<Button
						text='Acessar'
						onPress={async () => {
							if (!email) console.error('Verique o email');

							if (!password) console.error('Verifique a senha');

							if (email && password) {
								await signIn(email, password);
								clear();
							}
						}}
					/>

					<Button
						text='Criar uma conta'
						variant='only-text'
						onPress={() => setLogin(false)}
					/>
				</Wrapper>
			) : (
				<Wrapper>
					<Input
						placeholder='Seu nome'
						value={name}
						onChangeText={text => setName(text)}
					/>

					<Input
						placeholder='email@email.com'
						keyboardType='email-address'
						value={email}
						onChangeText={text => setEmail(text)}
					/>

					<Input
						placeholder='*********'
						secret
						value={password}
						onChangeText={text => setPassword(text)}
					/>

					<Button
						text='Cadastrar'
						onPress={() => {
							if (!email) console.error('Verique o email');

							if (!name) console.error('Verique o nome');

							if (!password) console.error('Verifique a senha');

							if (email && password && name) {
								signUp(name, email, password);
								clear();
							}
						}}
					/>

					<Button
						text='Já possuo uma conta'
						variant='only-text'
						onPress={() => setLogin(true)}
					/>
				</Wrapper>
			)}

			{errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
		</Container>
	);
}
