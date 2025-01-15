import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { IPost } from '../../types';

export const StyledList = styled(FlatList<IPost>)`
	flex: 1;
	padding: 12px;
	background-color: #f0f0f0;
`;

export const Separator = styled.View`
	height: ${({ theme }) => theme.size.text.main}px;
`;

export const Empty = styled.View`
	height: 100%;
	justify-content: center;
	align-items: center;
`;

export const EmptyTxt = styled.Text`
	font-size: ${({ theme }) => theme.size.text.main}px;
`;