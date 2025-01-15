import { ActivityIndicator, FlatListProps } from 'react-native';

import { IPost } from '../../types';
import { Empty, Separator, StyledList } from './styles';
import { useThemeContext } from '../../contexts/themeContext';
import FeedEnd from '../FeedEnd';
import Post from '../Post';

interface PostListProps
	extends Omit<FlatListProps<IPost>, 'data' | 'renderItem'> {
	posts: IPost[];
	userLikes: string[];
	onLike: (postId: string) => void;
	isEmptyList: boolean;
}

/**
 * Lista de posts.
 *
 * @prop posts - Lista de posts a serem exibidos.
 * @prop userLikes - Lista de IDs dos posts que o usuário curtiu.
 * @prop onLike - Função chamada quando um post é curtido.
 * @prop isEmptyList - Indica se a lista de posts está vazia.
 * @prop props - Outras propriedades do componente FlatList.
 */
export default function PostList(props: PostListProps) {
	const { theme } = useThemeContext();

	return (
		<StyledList
			data={props.posts}
			renderItem={({ item }) => (
				<Post
					//@ts-ignore
					post={item}
					userLikes={props.userLikes || []}
					onLike={props.onLike}
				/>
			)}
			ItemSeparatorComponent={() => <Separator />}
			ListFooterComponent={() => (
				<FeedEnd isEmptyList={props.isEmptyList} />
			)}
			ListEmptyComponent={() => (
				<Empty>
					<ActivityIndicator
						color={theme.colors.primary.main}
						size={48}
					/>
				</Empty>
			)}
			showsVerticalScrollIndicator={false}
			{...props}
		/>
	);
}
