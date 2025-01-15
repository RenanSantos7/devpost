import { TextInput, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { useThemeContext } from '../../contexts/themeContext';
import Icon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';

import {
	Container,
	Result,
	ResultsList,
	ResultTxt,
	SearchBox,
	SearchInput,
} from './styles';
import { HomeStackParams } from '../../routes/home.routes';
import { IUser } from '../../types';

export default function Search() {
	const navigation = useNavigation<NavigationProp<HomeStackParams>>();

	const [searchQuery, setSearchQuery] = useState('');
	const [results, setResults] = useState<IUser[]>([]);
	const inputRef = useRef<TextInput>(null)

	const { theme } = useThemeContext();

	useEffect(() => {
		if (!searchQuery) {
			setResults([]);
			return;
		}

		const subscriber = firestore()
			.collection('users')
			.where('name', '>=', searchQuery)
			.where('name', '<=', searchQuery + '\uf8ff')
			.onSnapshot(snapshot => {
				const list: any[] = [];

				snapshot.forEach(doc => {
					list.push({
						...doc.data(),
						uid: doc.id,
					});
				});

				setResults(list);
			});

		return () => {
			subscriber();
		};
	}, [searchQuery]);

	return (
		<Container>
			<SearchBox onPress={() => inputRef.current.focus()}>
				<Icon
					name='search'
					size={theme.size.text.main}
					color={theme.colors.primary.main}
				/>
				<SearchInput
					ref={inputRef}
					onChangeText={text => setSearchQuery(text)}
					value={searchQuery}
					placeholder='Procurando alguém?'
					autoCapitalize='none'
					cursorColor={theme.colors.primary.main}
					selectionColor='#cc000058'
					selectionHandleColor={theme.colors.primary.main}
					underlineColorAndroid='transparent'
					autoFocus
					inlineImageLeft='search_icon'
					
				/>
			</SearchBox>

			<ResultsList
				data={results}
				keyExtractor={item => item.uid}
				renderItem={({ item }) => (
					<Result
						onPress={() => {
							navigation.navigate('PostsUser', {
								userId: item.uid,
							});
						}}
					>
						<ResultTxt>{item.name}</ResultTxt>
					</Result>
				)}
				ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
			/>
		</Container>
	);
}
