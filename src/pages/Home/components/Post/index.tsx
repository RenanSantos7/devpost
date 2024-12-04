import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	Author,
	Container,
	Content,
	Header,
	Likes,
	LikesNum,
	Time,
	UserPhoto,
} from './styles';
import { FlexLine } from '../../../../components/layout';
import { IPost } from '../../../../types/index.ts';
import { useThemeContext } from '../../../../contexts/themeContext';
import relativeDate from '../../../../utils/relativeDate.ts';
import { is } from 'date-fns/locale';

interface PostProps {
	post: IPost;
	userLikes: string[];
	onLike: (postId: string) => void;
}

export default function Post({ post, userLikes, onLike }: PostProps) {
	const [likes, setLikes] = useState(post.likes);

	const { theme } = useThemeContext();

	const photo = useMemo(() => {
		const { avatarUrl } = post;
		return avatarUrl
			? { uri: avatarUrl }
			: require('../../../../assets/avatar.png');
	}, [post]);

	const time = useMemo(() => {
		const { created } = post;
		return relativeDate(created);
	}, [post]);

	const isLiked = useMemo(
		() => userLikes.some(item => item.trim() === post.uid.trim()),
		[userLikes]
	);

	useEffect(() => {
		if (post.uid === 'GJPc1mT0sjIV9oM6EKPR')
			console.log(`isLiked: ${isLiked}`);
	}, [isLiked]);

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
			<Header>
				<UserPhoto source={photo} resizeMode='cover' />
				<Author>{post.author}</Author>
			</Header>

			<Content>{post.content}</Content>

			<FlexLine justifyContent='space-between'>
				<Likes onPress={handleLike}>
					{isLiked ? (
						<MaterialComIcons
							name='heart'
							size={theme.size.text.main}
							color={theme.colors.primary.main}
						/>
					) : (
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
