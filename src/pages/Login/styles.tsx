import styled from 'styled-components/native';
import Page from '../../components/layout/Page';

export const Container = styled(Page)`
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.background.main};
	padding-inline: 40px;
`;

export const Wrapper = styled.View`
	gap: 18px;
	width: 100%;
`;

export const ErrorMsg = styled.Text`
	color: ${({ theme }) => theme.colors.error};
	font-style: italic;
`;
