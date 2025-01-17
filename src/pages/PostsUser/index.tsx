import { Alert, Text, View } from 'react-native';
import {
	NavigationProp,
	RouteProp,
	useFocusEffect,
	useNavigation,
	useRoute,
} from '@react-navigation/native';
import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Page } from '../../components/layout';
import { HomeStackParams } from '../../routes/home.routes';
import { IPost } from '../../types';
import { useAuthContext } from '../../contexts/authContext';
import PostList from '../../components/PostList';
import Header from './components/Header';
import BackBtn from '../../components/BackBtn';

export default function Profile() {
	const route = useRoute<RouteProp<HomeStackParams, 'Profile'>>();
	const navigation = useNavigation<NavigationProp<HomeStackParams>>();
	const { like } = useAuthContext();

	const [user, setUser] = useState(null);
	const [posts, setPosts] = useState<IPost[]>([]);
	const [loading, setLoading] = useState(true);

	async function onLike(postId: string) {
		like(postId);
		const isLiked = user?.likes.includes(postId);
		const currentPost = posts.find(post => post.uid === postId);
		let numLikes = currentPost?.likes || 0;

		if (isLiked) {
			numLikes = numLikes === 0 ? 0 : numLikes - 1;

			try {
				await firestore().collection('posts').doc(postId).update({
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
				await firestore().collection('posts').doc(postId).update({
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
			// garante que as atualizações só sejam feitas se a tela
			// estiver ativa
			let isActive = true;

			firestore()
				.collection('posts')
				.where('userId', '==', route.params?.userId)
				.orderBy('created', 'desc')
				.get()
				.then(snapshot => {
					const postList: any[] = [];

					snapshot.docs.map(u => {
						const data = u.data() as IPost;
						postList.push({
							...data,
							//@ts-ignore
							created: new Date(data.created.seconds * 1000),
							uid: u.id,
						});
					});

					if (isActive) {
						setPosts(postList);
						setLoading(false);
					}
				});

			return () => {
				isActive = false;
			};
		}, [])
	);

	useEffect(() => {
		const currentUserId = route.params.userId;

		firestore()
			.collection('users')
			.doc(currentUserId)
			.get()
			.then(snapshot => {
                const data = snapshot.data();
				if (data) {
					setUser(data);
				}
			});
	}, [route]);

	return (
        <Page>
			<BackBtn onPress={() => {
				navigation.goBack()
			}} />
			<Header username={user?.name} photo={user?.photoUrl || ''} />
			<PostList
				posts={posts}
				userLikes={user?.likes || []}
				onLike={onLike}
				isEmptyList={false}
				refreshing={false}
				onRefresh={() => {}}
				onEndReached={() => {}}
			/>
		</Page>
	);
}
