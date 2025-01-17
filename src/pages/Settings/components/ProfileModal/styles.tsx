import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
	background-color: ${({ theme }) => theme.colors.background.lighter};
	position: absolute;
	bottom: 0;
	padding: ${({ theme }) => theme.size.spacing.main}px;
	border-top-right-radius: 24px;
	border-top-left-radius: 24px;
	width: 100%;
	height: 50%;
	align-items: center;
	justify-content: center;
`;

export const BackButton = styled.Pressable`
	position: absolute;
	top: ${({ theme }) => theme.size.spacing.main}px;
    left: ${({ theme }) => theme.size.spacing.main}px;
	flex-direction: row;
	gap: 12px;
	align-items: center;
`;

export const BackButtonTxt = styled.Text`
	font-size: ${({ theme }) => theme.size.text.main};
`;

export const Content = styled.View`
	margin-top: 36px;
	margin-bottom: 20px;
	gap: 20px;
`;
