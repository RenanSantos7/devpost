import { PressableProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

interface BackBtnProps extends PressableProps { };

const Button = styled.Pressable`
  position: absolute;
  top: ${({theme}) => theme.size.spacing.main}px;
  left: ${({theme}) => theme.size.spacing.main}px;
`;

export default function BackBtn(props: BackBtnProps) {
    return (
        <Button {...props}>
            <Icon
                name='arrow-left'
                size={24}
            />
        </Button>
    );
};