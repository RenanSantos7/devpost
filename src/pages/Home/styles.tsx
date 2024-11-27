import styled from 'styled-components/native';

export const PostList = styled.FlatList`
	flex: 1;
	padding: 12px;
	background-color: #f0f0f0;
`;

export const Separator = styled.View`
	height: ${({ theme }) => theme.size.text.main}px;
`;
