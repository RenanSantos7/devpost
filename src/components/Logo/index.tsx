import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface LogoProps {
    size: number;
    style?: ViewStyle;
};

interface StyledImageProps {
    $size: number;
    style?: ViewStyle;
}

const StyledImage = styled.Image<StyledImageProps>`
	height: ${props => props.$size}px;
	object-fit: contain;
`;

export default function Logo(props: LogoProps) {
    return (
        <StyledImage
            source={require('../../assets/logo.png')}
            $size={props.size}
            style={props.style}
        />
    );
};