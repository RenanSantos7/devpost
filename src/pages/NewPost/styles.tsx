import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	padding: 20px;
	background-color: #404349;
	gap: 20px;
`;

export const Input = styled.TextInput`
	border-radius: 8px;
	padding: 8px;
	flex: 1;
	font-size: 18px;
	color: white;

	/* border: 1px solid red; */
`;

type PostSizeProps = {
	danger: boolean;
};

export const PostSize = styled.View`
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	border: 1px solid transparent;
	gap: 8px;
`;

export const PostSizeTxt = styled.Text<PostSizeProps>`
	color: ${props => (props.danger ? props.theme.colors.error : '#e9e9e9')};
	font-size: ${({ theme }) => theme.size.text.small}px;
`;
