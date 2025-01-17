import { useMemo } from 'react';
import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

interface UserPhotoProps extends ImageProps {
	photo?: string;
	size?: number;
}

interface PhotoProps { 
	$width: number;
	$height: number;
};

const Photo = styled.Image<PhotoProps>`
	width: ${props => props.$width}px;
	height: ${props => props.$height}px;
	border-radius: 500px;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.colors.text.light};
`;

export default function UserPhoto(props: UserPhotoProps) {
	const imageSource = useMemo(() => {
		return props.photo
			? { uri: props.photo }
			: require('../../assets/avatar.png');
	}, [props.photo]);

	return (
		<Photo
			source={imageSource}
			resizeMode='cover'
			$width={props.size || 32}
			$height={props.size || 32}
			{...props}
		/>
	);
}
