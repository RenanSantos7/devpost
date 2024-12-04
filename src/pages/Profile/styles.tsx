import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background.main};
	justify-content: center;
	align-items: center;
	padding-left: ${({ theme }) => theme.size.spacing.main}px;
	padding-right: ${({ theme }) => theme.size.spacing.main}px;
	gap: 24px;
`;

export const Avatar = styled.Image`
	width: 150px;
	height: 150px;
	border-radius: 100px;
`;

export const User = styled.View`
	align-items: center;
	justify-content: center;
`;

export const UserName = styled.Text`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text.title};
	font-size: ${({ theme }) => theme.size.text.large}px;
`;

export const UserEmail = styled.Text`
	font-size: ${({ theme }) => theme.size.text.main}px;
	color: ${({ theme }) => theme.colors.text.main};
`;
