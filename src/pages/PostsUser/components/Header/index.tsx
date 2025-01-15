import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import UserPhoto from '../../../../components/UserPhoto';

interface HeaderProps {
    username: string;
    photo: string;
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.theme.size.spacing.main * 2}px;
  margin-bottom: ${props => props.theme.size.spacing.main}px;
`;

const Title = styled.Text`
  font-size: ${({ theme }) => theme.size.text.large}px;
  text-align: center;
`;

export default function Header(props: HeaderProps) {
    return (
        <Container>
            <UserPhoto photo={props.photo} size={72} />
            <Title>{props.username}</Title>
        </Container>
    );
};