import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	position: absolute;
    bottom: 16px;
    right: 16px;
	background-color: ${({ theme }) => theme.colors.background.main};
	width: 64px;
	height: 64px;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
    z-index: 99;
`;
