import { useMemo } from 'react';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
	Author,
	Container,
	Content,
	Likes,
	LikesNum,
	Time,
	UserPhoto,
} from './styles';
import { FlexLine } from '../../../../components/layout';
import { IPost } from '../../../../types/index.ts';
import { useThemeContext } from '../../../../contexts/themeContext';
import relativeDate from '../../../../utils/relativeDate.ts';

interface PostProps {
	post: IPost;
}

export default function Post({ post }: PostProps) {
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

	const { theme } = useThemeContext();

	return (
		<Container>
			<FlexLine gap={12}>
				<UserPhoto source={photo} />
				<Author>{post.author}</Author>
			</FlexLine>

			<Content>{post.content}</Content>

			<FlexLine justifyContent='space-between'>
				<Likes>
					<MaterialComIcons
						name='heart-plus-outline'
						size={theme.size.text.main}
						color={theme.colors.primary.main}
					/>
					{post.likes > 0 && <LikesNum>{post.likes} likes</LikesNum>}
				</Likes>

				{post.created && <Time>{time}</Time>}
			</FlexLine>
		</Container>
	);
}
