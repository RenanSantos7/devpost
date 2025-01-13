import firestore from '@react-native-firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

/**
 * Busca os posts no Firestore e atualiza o estado dos posts, da lista vazia e do último item.
 * @param isActive 
 * @param setPosts 
 * @param setEmptyList 
 * @param setLastItem 
 */
export function fetchPosts(
	isActive: boolean,
	setPosts: Dispatch<SetStateAction<any[]>>,
	setEmptyList: Dispatch<SetStateAction<boolean>>,
	setLastItem: Dispatch<SetStateAction<any>>
) {
	firestore()
		.collection('posts')
		.orderBy('created', 'desc')
		.limit(5)
		.get()
		.then(snapshot => {
			const { docs } = snapshot;

			if (isActive) {
				setPosts([]);
				const postList: any[] = [];
				docs.map(d => {
					const data = d.data();

					postList.push({
						...data,
						created: new Date(data.created.seconds * 1000),
						uid: d.id,
					});
				});
				setEmptyList(snapshot.empty);
				setPosts(postList);
				setLastItem(docs[docs.length - 1]);
			}
		});
}

/**
 * Atualiza a lista de posts.
 * @param setPosts 
 * @param setEmptyList 
 * @param setLastItem 
 * @param setLoading 
 */
export async function handleRefreshPosts(
	setPosts: Dispatch<SetStateAction<any[]>>,
	setEmptyList: Dispatch<SetStateAction<boolean>>,
	setLastItem: Dispatch<SetStateAction<any>>,
	setLoadingRefresh: Dispatch<SetStateAction<boolean>>,
) {
	firestore()
		.collection('posts')
		.orderBy('created', 'desc')
		.limit(5)
		.get()
		.then(snapshot => {
			const { docs } = snapshot;
			setPosts([]);
			const postList: any[] = [];

			docs.map(d => {
				const data = d.data();

				postList.push({
					...data,
					created: new Date(data.created.seconds * 1000),
					uid: d.id,
				});
			});

			setEmptyList(false);
			setPosts(postList);
			setLastItem(docs[docs.length - 1]);
		});

	setLoadingRefresh(false);
}
