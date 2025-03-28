import styled from 'styled-components/native';

interface TextProps {
	bold?: boolean;
	italic?: boolean;
}

const Text = styled.Text<TextProps>`
	font-family: ${(props: TextProps) =>
		props.bold && props.italic
			? 'Rubik-SemiBoldItalic'
			: props.bold && !props.italic
			? 'Rubik-SemiBold'
			: props.italic
			? 'Rubik-Italic'
			: 'Rubik-Regular'};
	font-size: 16px;
`;

export default Text;
