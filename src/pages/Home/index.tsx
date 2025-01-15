import { ActivityIndicator, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Header, Page } from '../../components/layout';
import {
	fetchPosts,
	getListPosts,
	handleRefreshPosts
} from './controllers';
import { useAuthContext } from '../../contexts/authContext';
import { useThemeContext } from '../../contexts/themeContext';
import FloatingBtn from '../../components/FloatingBtn';
import { IPost } from '../../types';
import PostList from '../../components/PostList';

export default function Home() {
	const { signedUser, like } = useAuthContext();

	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [loadingRefresh, setLoadingRefresh] = useState(false);
	const [lastItem, setLastItem] = useState<any>(undefined);
	const [emptyList, setEmptyList] = useState(false);

	async function onLike(postId: string) {
		like(postId);
		const isLiked = signedUser?.likes.includes(postId);
		const currentPost = posts.find(post => post.uid === postId);
		let numLikes = currentPost?.likes || 0;

		if (isLiked) {
			numLikes = numLikes === 0 ? 0 : numLikes - 1;

			try {
				await firestore()
				.collection('posts')
				.doc(postId)
				.update({
					likes: numLikes,
				});

				setPosts(
					posts.map(post =>
						post.uid === postId
							? { ...post, likes: numLikes }
							: post
					)
				);
			} catch (error) {
				Alert.alert('Erro', 'Não foi possível descurtir o post.');
			}
		} else {
			numLikes += 1;

			try {
				await firestore()
				.collection('posts')
				.doc(postId)
				.update({
					likes: numLikes,
				});

				setPosts(
					posts.map(post =>
						post.uid === postId
							? { ...post, likes: numLikes }
							: post
					)
				);
			} catch (error) {
				Alert.alert('Erro', 'Não foi possível curtir o post.');
			}

		}
	}

	useFocusEffect(
		useCallback(() => {
			let isActive = true;
			fetchPosts(isActive, setPosts, setEmptyList, setLastItem);
			setLoading(false);

			return () => {
				isActive = false;
			};
		}, [])
	);

	return (
		<Page>
			<Header />

			<PostList
				posts={posts}
				userLikes={signedUser?.likes || []}
				onLike={onLike}
				isEmptyList={emptyList}
				refreshing={loadingRefresh}
				onRefresh={async () => {
					handleRefreshPosts(
						setPosts,
						setEmptyList,
						setLastItem,
						setLoadingRefresh
					);
				}}
				onEndReached={() =>
					getListPosts(
						emptyList,
						setLoading,
						loading,
						setEmptyList,
						lastItem,
						setLastItem,
						setPosts
					)
				}
				onEndReachedThreshold={0.15}
			/>

			<FloatingBtn />
		</Page>
	);
}
