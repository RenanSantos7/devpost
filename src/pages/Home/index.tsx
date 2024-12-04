import { ActivityIndicator, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Header, Page } from '../../components/layout';
import { Empty, Footer, PostList, Separator } from './styles';
import { useAuthContext } from '../../contexts/authContext';
import { useThemeContext } from '../../contexts/themeContext';
import FloatingBtn from '../../components/FloatingBtn';
import Post from './components/Post';

import { mockPosts } from './mock';

export default function Home() {
	const { user, like } = useAuthContext();

	const [posts, setPosts] = useState([]);

	const { theme } = useThemeContext();

	useFocusEffect(
		useCallback(() => {
			let isActive = true;

			firestore()
				.collection('posts')
				.orderBy('created', 'asc')
				.limit(10)
				.get()
				.then(snapshot => {
					if (isActive) {
						setPosts([]);
						const postList: any[] = [];
						snapshot.docs.map(d => {
							const data = d.data();

							postList.push({
								...data,
								created: new Date(data.created.seconds * 1000),
								uid: d.id,
							});
						});
						setPosts(postList);
					}
				});

			return () => {
				isActive = false;
			};
		}, [])
	);

	function onLike(postId: string) {
		like(postId);

		if (user.likes.includes(postId)) {
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
			/>

			<FloatingBtn />
		</Page>
	);
}
