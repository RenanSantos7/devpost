import { ActivityIndicator } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { Header, Page } from '../../components/layout';
import { Empty, Footer, PostList, Separator } from './styles';
import { fetchPosts, handleRefreshPosts } from './controllers';
import { useAuthContext } from '../../contexts/authContext';
import { useThemeContext } from '../../contexts/themeContext';
import FloatingBtn from '../../components/FloatingBtn';
import Post from './components/Post';

export default function Home() {
	const { user, like } = useAuthContext();

	const [posts, setPosts] = useState([]);
	const [loadingRefresh, setLoadingRefresh] = useState(false);
	const [lastItem, setLastItem] = useState<any>(undefined);
	const [emptyList, setEmptyList] = useState(false);

	const { theme } = useThemeContext();

	function onLike(postId: string) {
		like(postId);

		if (user?.likes.includes(postId)) {
			setPosts(
				posts.map(post =>
					post.id === postId
						? { ...post, likes: post.likes - 1 }
						: post
				)
			);
		} else {
			setPosts(
				posts.map(post =>
					post.id === postId
						? { ...post, likes: post.likes + 1 }
						: post
				)
			);
		}
	}

	useFocusEffect(
		useCallback(() => {
			let isActive = true;

			fetchPosts(isActive, setPosts, setEmptyList, setLastItem);

			return () => {
				isActive = false;
			};
		}, [])
	);

	return (
		<Page>
			<Header />

			<PostList
				data={posts}
				renderItem={({ item }) => (
					<Post
						//@ts-ignore
						post={item}
						userLikes={user.likes || []}
						onLike={onLike}
					/>
				)}
				//@ts-ignore
				keyExtractor={item => item.uid}
				ItemSeparatorComponent={() => <Separator />}
				ListFooterComponent={<Footer />}
				ListEmptyComponent={() => (
					<Empty>
						<ActivityIndicator
							color={theme.colors.primary.main}
							size={48}
						/>
					</Empty>
				)}
				refreshing={loadingRefresh}
				onRefresh={async () => {
					handleRefreshPosts(
						setPosts,
						setEmptyList,
						setLastItem,
						setLoadingRefresh
					);
				}}
			/>

			<FloatingBtn />
		</Page>
	);
}
