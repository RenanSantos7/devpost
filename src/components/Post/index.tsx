import { useMemo, useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	Author,
	Container,
	Content,
	Header,
	Likes,
	LikesNum,
	Time,
} from './styles.tsx';
import { FlexLine } from '../layout/index.ts';
import { HomeStackParams } from '../../routes/home.routes.tsx';
import { IPost } from '../../types/index.ts';
import { useThemeContext } from '../../contexts/themeContext.tsx';
import UserPhoto from '../UserPhoto/index.tsx';
import relativeDate from '../../utils/relativeDate.ts';

interface PostProps {
	post: IPost;
	userLikes: string[];
	onLike: (postId: string) => void;
}

export default function Post({ post, userLikes, onLike }: PostProps) {
	const [likes, setLikes] = useState(post.likes);

	const { theme } = useThemeContext();
	const navigation = useNavigation<NavigationProp<HomeStackParams>>();

	const time = useMemo(() => {
		const { created } = post;
		return relativeDate(created);
	}, [post]);

	const isLiked = useMemo(
		() => userLikes.some(item => item.trim() === post.uid.trim()),
		[userLikes]
	);

	function handleLike() {
		onLike(post.uid);
		if (isLiked) {
			setLikes(prev => prev - 1);
		} else {
			setLikes(prev => prev + 1);
		}
	}

	return (
		<Container style={{ elevation: 3 }}>
			<Header
				onPress={() => navigation.navigate('PostsUser', { userId: post.userId })}
			>
				<UserPhoto photo={post.avatarUrl} />
				<Author>{post.author}</Author>
			</Header>

			<Content>{post.content}</Content>

			<FlexLine justifyContent='space-between'>
				<Likes onPress={handleLike}>
					{isLiked ? (
						// @ts-ignore
						<MaterialComIcons
							name='heart'
							size={theme.size.text.main}
							color={theme.colors.primary.main}
						/>
					) : (
						// @ts-ignore
						<MaterialComIcons
							name='heart-plus-outline'
							size={theme.size.text.main}
							color={theme.colors.primary.main}
						/>
					)}
					{likes > 0 && (
						<LikesNum>
							{likes} {likes > 1 ? 'likes' : 'like'}
						</LikesNum>
					)}
				</Likes>

				{post.created && <Time>{time}</Time>}
			</FlexLine>
		</Container>
	);
}
