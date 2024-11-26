import { useMemo, useState } from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { Container, Input, PostSize, PostSizeTxt } from './styles';
import Button from '../../components/Button';
import { useThemeContext } from '../../contexts/themeContext';

export default function NewPost() {
	const [post, setPost] = useState('');

	const { theme } = useThemeContext();

	const rest: number = useMemo(() => 300 - post.length, [post]);

	const danger: boolean = useMemo(() => rest <= 20, [rest]);

	function handlePost() {}

	return (
		<Container>
			<Input
				value={post}
				onChangeText={text => setPost(text)}
				autoCapitalize='sentences'
				cursorColor={theme.colors.primary.main}
				underlineColorAndroid='transparent'
				selectionHandleColor={theme.colors.primary.main}
				returnKeyType='send'
				returnKeyLabel='Enviar'
				maxLength={300}
				placeholder='O que está acontecendo?'
				placeholderTextColor={theme.colors.text.placeholder}
				textAlignVertical='top'
				autoFocus
				autoCorrect
				multiline
			/>

			<PostSize>
				{danger && (
					<IonIcons
						name='alert-circle'
						size={theme.size.text.small}
						color={theme.colors.error}
					/>
				)}
				<PostSizeTxt danger={danger}>{rest}/300</PostSizeTxt>
			</PostSize>

			<Button text='Compartilhar' onPress={handlePost} disabled={!post} />
		</Container>
	);
}
