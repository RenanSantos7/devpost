import styled from 'styled-components/native';

export const PrimaryBtn = styled.TouchableOpacity`
	background-color: #428cfd;
	border-radius: 8px;
	width: 100%;
	padding: 12px;
`;

export const PrimaryBtnTxt = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
`;

export const SecondaryBtn = styled(PrimaryBtn)`
  	background-color: #E7E7E7;
`;

export const SecondaryBtnTxt = styled(PrimaryBtnTxt)`
  	color: #303030;
`;

export const OnlyTxtBtn = styled.TouchableOpacity`
	width: 100%;
	padding: 12px;
`;

export const OnlyTxtBtnTxt = styled.Text`
    color: #ddd;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    font-size: 18px;
`;
