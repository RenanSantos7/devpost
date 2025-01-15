import { View, Text } from 'react-native';
import styled from 'styled-components/native';

interface FeedEndProps {
    isEmptyList: boolean;
}

const Footer = styled.View`
  padding-top: 48px;
  padding-bottom: 48px;
`;

const FooterTxt = styled.Text`
    font-size: 14px;
    color: #a0a0a0;
    text-align: center;
`;

export default function FeedEnd({ isEmptyList }: FeedEndProps) {
    return (
        <Footer>
            {!isEmptyList && (
                <FooterTxt>Isso é tudo, pessoal!</FooterTxt>
            )}
        </Footer>
    );
}

