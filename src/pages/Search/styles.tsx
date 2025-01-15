import styled from 'styled-components/native';
import { IUser } from '../../types';
import { FlatList, TextInput } from 'react-native';

export const Container = styled.SafeAreaView`
	flex: 1;
	padding: ${props => props.theme.size.spacing.main}px;
	background-color: ${props => props.theme.colors.background.main};
	gap: ${props => props.theme.size.spacing.main}px;
`;

export const SearchBox = styled.Pressable`
	background-color: #fff;
	padding: 10px;
	border-radius: 5px;
	flex-direction: row;
	gap: ${({ theme }) => theme.size.text.main}px;
	align-items: center;
	`;

export const SearchInput = styled(TextInput)`
	padding: 0;
	height: ${props => props.theme.size.spacing.main * 1.5}px;
`;

export const ResultsContainer = styled.View`
	gap: ${({ theme }) => theme.size.spacing.small}px;
`;

export const ResultsList = styled(FlatList<IUser>)`
  flex: 1;
`;

export const Result = styled.Pressable`
	background-color: ${({ theme }) => theme.colors.background.darker};
	padding: ${({ theme }) => theme.size.spacing.main}px;
	border-radius: 8px;
`;

export const ResultTxt = styled.Text`
	color: ${({ theme }) => theme.colors.text.lighter};
`;
