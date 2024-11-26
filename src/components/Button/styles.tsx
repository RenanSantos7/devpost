import styled from 'styled-components/native';

type ButtonProps = {
	$disabled: boolean;
};

export const PrimaryBtn = styled.TouchableOpacity<ButtonProps>`
	background-color: ${({ theme, $disabled }) =>
		$disabled ? theme.colors.secondary.dark : theme.colors.secondary.main};
	border-radius: 8px;
	width: 100%;
	padding: 12px;
`;

export const PrimaryBtnTxt = styled.Text<ButtonProps>`
	color: ${({ theme }) => theme.colors.text.main};
	opacity: ${({$disabled}) => $disabled ? '0.75' : '1'};
	font-weight: bold;
	text-align: center;
	font-size: ${({ theme }) => theme.size.text.main}px;
`;

export const SecondaryBtn = styled(PrimaryBtn)`
	background-color: ${({ $disabled }) =>
		$disabled ? 'hsl(0, 0%, 70%)' : 'hsl(0, 0%, 90%)'};
`;

export const SecondaryBtnTxt = styled(PrimaryBtnTxt)`
	color: ${({ $disabled }) =>
		$disabled ? 'hsla(0, 0%, 19%, 65%)' : 'hsl(0, 0%, 19%)'};
`;

export const OnlyTxtBtn = styled.TouchableOpacity<ButtonProps>`
	width: 100%;
	padding: 12px;
`;

export const OnlyTxtBtnTxt = styled.Text<ButtonProps>`
	color: ${({ theme }) => theme.colors.text.main};
	font-weight: bold;
	font-style: italic;
	text-align: center;
	font-size: ${({ theme }) => theme.size.text.main}px;
`;
