import styled from 'styled-components/native';
import MaterialComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.background.main};
	padding-left: ${({ theme }) => theme.size.spacing.main}px;
	padding-right: ${({ theme }) => theme.size.spacing.main}px;
	justify-content: space-between;
	align-items: center;
`;

export const Content = styled.View`
	justify-content: center;
	align-items: center;
	gap: 24px;
`;

export const UploadBtn = styled.Pressable`
	position: relative;
`;

export const UploadBtnIcon = styled(MaterialComIcons)`
	color: ${({ theme }) => theme.colors.primary.light};
	background-color: ${({ theme }) => theme.colors.background.main};
	border-radius: 200px;
	position: absolute;
	bottom: 8px;
	right: 8px;
	/* opacity: 0.75; */
`;

export const UploadBtnTxt = styled.Text`
	color: transparent;
	font-size: 128px;
	position: relative;

	&:hover {
		color: white;
	}
`;

export const User = styled.View`
	align-items: center;
	justify-content: center;
`;

export const UserName = styled.Text`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.text.title};
	font-size: ${({ theme }) => theme.size.text.large}px;
`;

export const UserEmail = styled.Text`
	font-size: ${({ theme }) => theme.size.text.main}px;
	color: ${({ theme }) => theme.colors.text.light};
`;

export const ButtonContainer = styled.View`
	gap: 24px;
`;
