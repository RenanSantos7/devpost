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
				docs.map(u => {
					const data = u.data();

					postList.push({
						...data,
						created: new Date(data.created.seconds * 1000),
						uid: u.id,
					});
				});
				setEmptyList(!!snapshot.empty);
				setPosts(postList.reverse());
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
	setLoadingRefresh: Dispatch<SetStateAction<boolean>>
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
			setPosts(postList.reverse());
			setLastItem(docs[docs.length - 1]);
		});

	setLoadingRefresh(false);
}

/**
 * Busca a lista de posts no Firestore para criar um scroll infinito.
 */
export async function getListPosts(
	emptyList: boolean,
	setLoading: Dispatch<SetStateAction<boolean>>,
	loading: boolean,
	setEmptyList: Dispatch<SetStateAction<boolean>>,
	lastItem: any,
	setLastItem: Dispatch<SetStateAction<any>>,
	setPosts: Dispatch<SetStateAction<any[]>>
): Promise<void> {
	if (emptyList) {
		// se buscou toda sua lista tiramos o loading.
		setLoading(false);
		return null;
	}

	if (loading) return;

	firestore()
		.collection('posts')
		.orderBy('created', 'desc')
		.limit(5)
		.startAfter(lastItem)
		.get()
		.then(snapshot => {
			const postList: any[] = [];

			snapshot.docs.map(u => {
				const data = u.data();
				postList.push({
					...data,
					created: new Date(data.created.seconds * 1000),
					uid: u.id,
				});
			});

			setEmptyList(!!snapshot.empty);
			setLastItem(snapshot.docs[snapshot.docs.length - 1]);
			setPosts(prev => [...prev, ...postList]);
			setLoading(false);
		});
}
