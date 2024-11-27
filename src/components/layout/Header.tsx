import styled from 'styled-components/native';
import Logo from '../Logo';

const Container = styled.View`
	background-color: ${({ theme }) => theme.colors.background.main};
	padding: 14px;
	justify-content: center;
	align-items: center;
`;

export default function Header() {
    return (
        <Container>
            <Logo size={32} />
        </Container>
    );
};