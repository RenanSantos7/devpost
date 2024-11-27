import { PostList, Separator } from './styles';
import { Header, Page } from '../../components/layout';
import FloatingBtn from '../../components/FloatingBtn';
import { useState } from 'react';
import Post from './components/Post';
import { IPost } from '../../types';
import { View } from 'react-native';

export default function Home() {
	const [posts, setPosts] = useState<IPost[]>([
		{
			uid: '12123',
			content: 'Olá Mundo!',
			author: 'Renan',
			avatarUrl: null,
			likes: 0,
			userId: '',
			created: new Date(2024, 10, 27, 11, 20),
		},
		{
			uid: '54545',
			content: 'date-fns é uma biblioteca JavaScript excelente para manipular datas e horários de forma precisa e concisa. Para criar strings como "há 10 minutos", "há poucos segundos", ela oferece funções que permitem calcular a diferença entre duas datas e formatar o resultado de maneira intuitiva.',
			author: 'Renan',
			avatarUrl: null,
			likes: 0,
			userId: '',
			created: new Date(2024, 10, 27, 12, 25),
		},
		{
			uid: 'gadgad',
			content: 'Se você ainda não tiver o date-fns instalado em seu projeto, use um gerenciador de pacotes como npm ou yarn:',
			author: 'Renan',
			avatarUrl: null,
			likes: 0,
			userId: '',
			created: new Date(2024, 10, 27, 11, 22),
		},
		{
			uid: '6789',
			content: 'Olá Mundo!',
			author: 'Ana Luiza',
			avatarUrl: null,
			likes: 0,
			userId: '',
			created: new Date(2024, 10, 27, 11, 23),
		},
		{
			uid: '678fa9',
			content: 'Importe as funções differenceInMinutes, differenceInSeconds, format e outras que você precisar:',
			author: 'João das Neves',
			avatarUrl: null,
			likes: 0,
			userId: '',
			created: new Date(2024, 10, 27, 11, 23),
		},
	]);

	return (
		<Page>
			<Header />

			<PostList
				data={posts}
				//@ts-ignore
				renderItem={({ item }) => <Post post={item} />}
				//@ts-ignore
				keyExtractor={item => item.uid}
				ItemSeparatorComponent={() => <Separator />}
				ListFooterComponent={() => <View style={{ height: 100 }} />}
			/>
			<FloatingBtn />
		</Page>
	);
}
