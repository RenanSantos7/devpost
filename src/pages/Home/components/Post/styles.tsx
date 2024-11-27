import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background.lighter};
	box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
	border-radius: 8px;
	padding: ${({ theme }) => theme.size.spacing.small}px;
	border: 1px solid #ddd;
`;

export const UserPhoto = styled.Image`
	width: 32px;
	height: 32px;
	border-radius: 32px;
	border: 1px solid ${({ theme }) => theme.colors.background.main};
`;

export const Author = styled.Text`
	font-size: 20px;
	font-weight: bold;
`;

export const Content = styled.Text`
	margin-top: 16px;
	margin-bottom: 16px;
	font-size: ${({ theme }) => theme.size.text.main}px;
	line-height: ${({ theme }) => theme.size.text.main * 1.35}px;
`;

export const Likes = styled.Pressable`
	flex-direction: row;
	gap: 8px;
`;

export const LikesNum = styled.Text`
	color: ${({ theme }) => theme.colors.primary.main};
`;

export const Time = styled.Text`
	font-size: ${({ theme }) => theme.size.text.small}px;
`;
