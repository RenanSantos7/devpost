import styled from 'styled-components/native';

export const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background.lighter};
	box-shadow: 1px 1px 1px rgba(200, 0, 0, 0.2);
	border-radius: 8px;
	padding: ${({ theme }) => theme.size.spacing.small}px;
	border: 1px solid #ddd;
`;

export const Header = styled.Pressable`
	width: 100%;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 12px;
`;

export const UserPhoto = styled.Image`
	width: 32px;
	height: 32px;
	border-radius: 32px;
	object-fit: cover;
	border: 1px solid ${({ theme }) => theme.colors.text.light};
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
	color: ${({ theme }) => theme.colors.text.main};
`;

export const Likes = styled.Pressable`
	flex-direction: row;
	gap: 8px;
`;

export const LikesNum = styled.Text`
	color: ${({ theme }) => theme.colors.primary.main};
	font-size: ${({ theme }) => theme.size.text.main}px;
`;

export const Time = styled.Text`
	font-size: ${({ theme }) => theme.size.text.small}px;
	color: ${({ theme }) => theme.colors.text.light};
`;
