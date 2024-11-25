import styled from 'styled-components/native';
import Page from '../../components/layout/Page';

export const Container = styled(Page)`
	justify-content: center;
	align-items: center;
	background-color: #353840;
	padding-inline: 40px;
`;

export const Wrapper = styled.View`
	gap: 18px;
	width: 100%;
`;


export const ErrorMsg = styled.Text`
	color: hsl(0, 85%, 75%);
	font-style: italic;
`;
