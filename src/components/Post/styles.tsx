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

export const Author = styled.Text`
	font-size: ${({ theme }) => theme.size.text.main}px;
	font-weight: bold;
`;

export const Content = styled.Text`
	margin-top: ${({ theme }) => theme.size.text.main}px;
	margin-bottom: ${({ theme }) => theme.size.text.main}px;
	font-size: ${({ theme }) => theme.size.text.main}px;
	line-height: ${({ theme }) => theme.size.text.main * 1.35}px;
	color: ${({ theme }) => theme.colors.text.main};
`;

export const Likes = styled.Pressable`
	flex-direction: row;
	justify-content: center;
	gap: 8px;
`;

export const LikesNum = styled.Text`
	color: ${({ theme }) => theme.colors.primary.main};
	font-size: ${({ theme }) => theme.size.text.smaller}px;
`;

export const Time = styled.Text`
	font-size: ${({ theme }) => theme.size.text.smaller}px;
	color: ${({ theme }) => theme.colors.text.light};
`;
