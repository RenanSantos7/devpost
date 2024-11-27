import { differenceInMinutes, differenceInSeconds, format } from 'date-fns';
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
import { IPost } from '../../../../types';
import { FlexLine } from '../../../../components/layout';
import { useThemeContext } from '../../../../contexts/themeContext';

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

		if (!created) return ''

		const now = new Date();
		const minutesDiff = differenceInMinutes(now, created);
		const secondsDiff = differenceInSeconds(now, created);

		if (secondsDiff < 30) {
			return 'agora mesmo';
		} else if (minutesDiff < 1) {
			return 'há poucos segundos';
		} else if (minutesDiff < 60) {
			return `há ${minutesDiff} minutos`;
		} else if (minutesDiff < 1440) {
			// 1440 minutos = 24 horas
			return `há ${Math.floor(minutesDiff / 60)} horas`;
		} else {
			// ... outros casos, como dias, meses, anos
			return format(created, 'dd/MM/yyyy');
		}
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
