import { ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface FlexLineProps {
	justifyContent?: ViewStyle['justifyContent'];
	alignItems?: ViewStyle['alignItems'];
	gap?: number;
}

const FlexLine = styled.View<FlexLineProps>`
	width: 100%;
	flex-direction: row;
	justify-content: ${props =>
		props.justifyContent ? props.justifyContent : 'flex-start'};
	align-items: ${props =>
		props.alignItems ? props.alignItems : 'center'};
	gap: ${props => (props.gap && props.gap > 0 ? props.gap : 0)}px;
`;

export default FlexLine;