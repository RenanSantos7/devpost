import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	flex: 1;
	padding: 20px;
	background-color: #404349;
	gap: 20px;
`;

export const SearchBox = styled.View`
	background-color: #fff;
	padding: 10px;
	border-radius: 5px;
	flex-direction: row;
	gap: ${({ theme }) => theme.size.text.main}px;
`;

export const SearchInput = styled.TextInput`
	padding: 0;
`;

export const ResultsContainer = styled.View`
	gap: ${({ theme }) => theme.size.spacing.small}px;
`;

export const Result = styled.View`
	background-color: ${({ theme }) => theme.colors.background.dark};
	padding: ${({ theme }) => theme.size.spacing.main}px;
	border-radius: 8px;
    elevation: 1;
`;

export const ResultTxt = styled.Text`
	color: ${({ theme }) => theme.colors.text.light};
`;
